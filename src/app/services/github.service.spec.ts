import { TestBed } from '@angular/core/testing';

import { GithubService } from './github.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';

describe('GithubService', () => {
  let service: GithubService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GithubService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRepos', () => {
    it('Should GET a list of repositories and cache them', (done) => {
      const mockResponse = {
        items: []
      };
      spyOn(service.repositories, 'next').and.callThrough();
      service.getRepos().subscribe(
        (res) => {
          expect(Array.isArray(res)).toBeTruthy();
          expect(service.repositories.next).toHaveBeenCalledTimes(1);
          done();
        });

      const call: TestRequest = backend.expectOne(`${service.url}/search/repositories?q=stars:%3E1000&sort=stars&order=desc&per_page=100`);
      expect(call.request.method).toEqual('GET');
      call.flush(mockResponse);
      backend.verify();
    });

    it('Should return the cache and not make an API call if there is cached data', (done) => {
      const mockResponse = {
        items: []
      };
      service.repositories.next([
        {
          id: 28457823,
          node_id: 'MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==',
          name: 'freeCodeCamp',
          full_name: 'freeCodeCamp/freeCodeCamp',
          owner: {
            login: 'freeCodeCamp',
            id: 9892522,
            node_id: 'MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=',
            avatar_url: 'https://avatars.githubusercontent.com/u/9892522?v=4',
            html_url: 'https://github.com/freeCodeCamp'
          },
          html_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
          description: 'freeCodeCamp.org\'s open source codebase and curriculum. Learn to code for free.',
          homepage: 'https://contribute.freecodecamp.org',
          stargazers_count: 321043,
          watchers_count: 321043,
          language: 'JavaScript',
          archived: false,
          disabled: false,
          forks: 25460
        },
      ]);
      spyOn(service.repositories, 'next').and.callThrough();
      service.getRepos().subscribe(
        (res) => {
          expect(Array.isArray(res)).toBeTruthy();
          expect(service.repositories.next).toHaveBeenCalledTimes(0);
          backend.expectNone(`${service.url}/search/repositories?q=stars:%3E1000&sort=stars&order=desc&per_page=100`);
          done();
        });
    });

    it('Should pass errors along to its subscriber to be handled upstream', (done) => {
      service.getRepos().subscribe(
        () => fail('This should not happen'),
        err => {
          expect(err instanceof HttpErrorResponse).toBeTruthy();
          done();
        }
      );

      const call: TestRequest = backend.expectOne(`${service.url}/search/repositories?q=stars:%3E1000&sort=stars&order=desc&per_page=100`);
      expect(call.request.method).toEqual('GET');
      call.error(new ErrorEvent('err'));
      backend.verify();
    });

  });

  describe('getCommits', () => {
    it('Should GET a list of commits for this repo and owner', (done) => {
      const mockResponse = [{
        author: null,
        commit: {
          author: { email: 'email@email.com', name: 'Bob Dylan', date: 'Thu Feb 25 2021 15:51:35 GMT-0800 (Pacific Standard Time)' },
          message: 'Fixed it',
          html_url: '',
          node_id: '',
          sha: ''
        }
      }];
      service.getCommits('owner', 'repo').subscribe(
        (res) => {
          expect(Array.isArray(res)).toBeTruthy();
          done();
        }
      );

      const call: TestRequest = backend.expectOne(`${service.url}/repos/owner/repo/commits`);
      expect(call.request.method).toEqual('GET');
      call.flush(mockResponse);
      backend.verify();
    });

    it('Should pass errors along to its subscriber to be handled upstream', (done) => {
      service.getCommits('owner', 'repo').subscribe(
        () => fail('This should not happen'),
        err => {
          expect(err instanceof HttpErrorResponse).toBeTruthy();
          done();
        }
      );

      const call: TestRequest = backend.expectOne(`${service.url}/repos/owner/repo/commits`);
      expect(call.request.method).toEqual('GET');
      call.error(new ErrorEvent('err'));
      backend.verify();
    });
  });


});

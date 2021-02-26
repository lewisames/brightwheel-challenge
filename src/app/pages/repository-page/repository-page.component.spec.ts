import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryPageComponent } from './repository-page.component';
import { GithubService } from '../../services/github.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

const MockGithubService = {
  getRepos: () => {
    return of([]);
  }
};

describe('RepositoryPageComponent', () => {
  let component: RepositoryPageComponent;
  let fixture: ComponentFixture<RepositoryPageComponent>;
  let service: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: GithubService,
          useValue: MockGithubService
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GithubService);
  });

  it('should load a list of repos onInit', (done) => {
    spyOn(service, 'getRepos').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(service.getRepos).toHaveBeenCalledTimes(1);
      expect(component).toBeTruthy();
      const loadingBit = component.loading.getValue();
      expect(loadingBit).toEqual('ready');
      done();
    });
  });

  it('should catch and log api errors and set the loading bit to error', (done) => {
    spyOn(service, 'getRepos').and.returnValue(throwError(new HttpErrorResponse({})));
    spyOn(console, 'log');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(service.getRepos).toHaveBeenCalledTimes(1);
      expect(component).toBeTruthy();
      const loadingBit = component.loading.getValue();
      expect(loadingBit).toEqual('error');
      expect(console.log).toHaveBeenCalled();
      done();
    });
  });
});

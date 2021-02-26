import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsPageComponent } from './commits-page.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

const MockActivatedRoute = {
  snapshot: {
    paramMap: convertToParamMap({ owner: 'hax0r', repo: 'scriptz' }),
  },
};

const MockGithubService = {
  getCommits: () => {
    return of([]);
  }
};

describe('CommitsPageComponent', () => {
  let component: CommitsPageComponent;
  let fixture: ComponentFixture<CommitsPageComponent>;
  let service: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitsPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: MockActivatedRoute
        },
        {
          provide: GithubService,
          useValue: MockGithubService
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(GithubService);
  });

  it('should load a list of commits onInit', (done) => {
    spyOn(service, 'getCommits').and.callThrough();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(service.getCommits).toHaveBeenCalledWith('hax0r', 'scriptz');
      expect(component).toBeTruthy();
      const loadingBit = component.loading.getValue();
      expect(loadingBit).toEqual('ready');
      done();
    });
  });

  it('should catch and log api errors and set the loading bit to error', (done) => {
    spyOn(service, 'getCommits').and.returnValue(throwError(new HttpErrorResponse({})));
    spyOn(console, 'log');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(service.getCommits).toHaveBeenCalledWith('hax0r', 'scriptz');
      expect(component).toBeTruthy();
      const loadingBit = component.loading.getValue();
      expect(loadingBit).toEqual('error');
      expect(console.log).toHaveBeenCalled();
      done();
    });
  });
});

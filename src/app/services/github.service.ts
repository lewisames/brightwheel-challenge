import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GithubRepository } from '../models/githubRepository';
import { concatMap, map, take, tap } from 'rxjs/operators';
import { GithubCommit } from '../models/githubCommit';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private headers = new HttpHeaders('Accept: application/vnd.github.v3+json');
  public url = 'https://api.github.com';
  public repositories = new BehaviorSubject<GithubRepository[]>([]);

  constructor(private http: HttpClient) {
  }

  // returns list of most starred repos
  // first response is cached, and cached list is served while app is alive
  getRepos(): Observable<GithubRepository[]> {
    const query = {
      q: 'stars:>1000',
      sort: 'stars',
      order: 'desc',
      per_page: '100'
    };
    const params = new HttpParams({ fromObject: query });

    return this.repositories.pipe(
      take(1),
      concatMap((cachedRepos: GithubRepository[]) => {
        if (cachedRepos.length) {
          return of(cachedRepos);
        }
        return this.http.get(`${this.url}/search/repositories`, { params, headers: this.headers }).pipe(
          map((res: any) => res.items),
          tap(repos => this.repositories.next(repos))
        );
      }));
  }

  getCommits(owner: string = '', repo: string = ''): Observable<GithubCommit[]> {
    return this.http.get(`${this.url}/repos/${owner}/${repo}/commits`, { headers: this.headers }).pipe(
      map((res: any) => res)
    );
  }
}

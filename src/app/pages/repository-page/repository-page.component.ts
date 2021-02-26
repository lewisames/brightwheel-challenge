import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { BehaviorSubject } from 'rxjs';
import { GithubRepository } from '../../models/githubRepository';
import { LoadingState } from '../../models/ui';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit {

  constructor(private githubService: GithubService) {
  }
  public repositories = new BehaviorSubject<GithubRepository[]>([]);
  public loading = new BehaviorSubject<LoadingState>('loading');

  ngOnInit(): void {

    this.loading.next('loading');
    this.githubService.getRepos().subscribe(
      (repos) => {
        this.repositories.next(repos);
        this.loading.next('ready');
      },
      err => {
        console.log(err);
        this.loading.next('error');
      }
    );
  }
}

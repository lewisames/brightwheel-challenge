import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { BehaviorSubject } from 'rxjs';
import { GithubRepository } from '../../models/githubRepository';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.scss']
})
export class RepositoryPageComponent implements OnInit {

  constructor(private githubService: GithubService) {
  }
  public repositories = new BehaviorSubject<GithubRepository[]>([]);
  public loading = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.loading.next(true);
    this.githubService.getRepos().subscribe(
      (repos) => this.repositories.next(repos),
      err => console.log(err),
      () => this.loading.next(false)
    );
  }
}

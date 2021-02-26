import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubRepository } from '../../../../models/githubRepository';

@Component({
  selector: 'github-repo-list',
  templateUrl: './github-repo-list.component.html',
  styleUrls: ['./github-repo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepoListComponent implements OnInit {
  @Input() public repositories: GithubRepository[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

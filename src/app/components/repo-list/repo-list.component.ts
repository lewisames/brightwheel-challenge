import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubRepository } from '../../models/githubRepository';

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements OnInit {
  @Input() public repositories: GithubRepository[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

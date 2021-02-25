import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubRepository } from '../../models/githubRepository';

@Component({
  selector: 'repo-title',
  templateUrl: './repo-title.component.html',
  styleUrls: ['./repo-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoTitleComponent implements OnInit {
  @Input() public repo!: GithubRepository;

  constructor() { }

  ngOnInit(): void {
  }

}

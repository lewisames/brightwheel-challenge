import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubRepository } from '../../../../models/githubRepository';

const descriptionMaxLength = 200;

@Component({
  selector: 'github-repo-card',
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepoCardComponent implements OnInit {
  @Input() public repo!: GithubRepository;

  public description = '';

  constructor() {
  }

  public get commitsLink(): string[] {
    return [`/repo/${this.repo.owner.login}/${this.repo.name}/commits`];
  }

  ngOnInit(): void {
    this.description = this.repo.description.length > descriptionMaxLength
      ? `${this.repo.description.substr(0, descriptionMaxLength)}...`
      : this.repo.description;
  }

}

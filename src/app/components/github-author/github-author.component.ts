import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubAuthor } from '../../models/githubAuthor';
import { GithubCommitAuthor } from '../../models/githubCommit';

@Component({
  selector: 'github-author',
  templateUrl: './github-author.component.html',
  styleUrls: ['./github-author.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubAuthorComponent implements OnInit {
  @Input() public author!: GithubAuthor | GithubCommitAuthor;

  public name!: string;
  public img = '';

  constructor() { }

  ngOnInit(): void {
    const author = this.author as any;
    this.name = author.login || author.name || '';
    this.img = author.avatar_url || '';
  }

}

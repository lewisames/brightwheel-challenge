import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GithubAuthor } from '../../models/githubAuthor';
import { GithubCommitAuthor } from '../../models/githubCommit';

@Component({
  selector: 'git-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorComponent implements OnInit {
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

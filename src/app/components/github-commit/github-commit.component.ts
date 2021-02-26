import { Component, Input, OnInit } from '@angular/core';
import { GithubCommit, GithubCommitAuthor } from '../../models/githubCommit';
import { GithubAuthor } from '../../models/githubAuthor';

@Component({
  selector: 'github-commit',
  templateUrl: './github-commit.component.html',
  styleUrls: ['./github-commit.component.scss']
})
export class GithubCommitComponent implements OnInit {
  @Input() public commit!: GithubCommit;

  public author!: GithubAuthor | GithubCommitAuthor;

  constructor() { }

  ngOnInit(): void {
    this.author = this.commit.author || this.commit.commit.author;
  }

}

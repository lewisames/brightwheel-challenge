import { Component, Input, OnInit } from '@angular/core';
import { GithubCommit, GithubCommitAuthor } from '../../models/githubCommit';
import { GithubAuthor } from '../../models/githubAuthor';

@Component({
  selector: 'github-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
  @Input() public commit!: GithubCommit;

  public author!: GithubAuthor | GithubCommitAuthor;

  constructor() { }

  ngOnInit(): void {
    this.author = this.commit.author || this.commit.commit.author;
  }

}

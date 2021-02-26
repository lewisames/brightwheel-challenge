import { Component, Input, OnInit } from '@angular/core';
import { GithubCommit } from '../../models/githubCommit';

@Component({
  selector: 'github-commits-list',
  templateUrl: './github-commits-list.component.html',
  styleUrls: ['./github-commits-list.component.scss']
})
export class GithubCommitsListComponent implements OnInit {
  @Input() public commits: GithubCommit[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

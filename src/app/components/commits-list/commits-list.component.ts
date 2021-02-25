import { Component, Input, OnInit } from '@angular/core';
import { GithubCommit } from '../../models/githubCommit';

@Component({
  selector: 'github-commits-list',
  templateUrl: './commits-list.component.html',
  styleUrls: ['./commits-list.component.scss']
})
export class CommitsListComponent implements OnInit {
  @Input() public commits: GithubCommit[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

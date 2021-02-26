import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'github-repo-stats',
  templateUrl: './github-repo-stats.component.html',
  styleUrls: ['./github-repo-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubRepoStatsComponent implements OnInit {
  @Input() public stargazers!: number;
  @Input() public forks!: number;
  @Input() public language!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

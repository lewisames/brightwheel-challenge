import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'repo-stats',
  templateUrl: './repo-stats.component.html',
  styleUrls: ['./repo-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoStatsComponent implements OnInit {
  @Input() public stargazers!: number;
  @Input() public forks!: number;
  @Input() public language!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

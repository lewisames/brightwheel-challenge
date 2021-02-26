import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { BehaviorSubject } from 'rxjs';
import { GithubCommit } from '../../models/githubCommit';
import { LoadingState } from '../../models/ui';

@Component({
  selector: 'app-commits-page',
  templateUrl: './commits-page.component.html',
  styleUrls: ['./commits-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsPageComponent implements OnInit {
  public commits = new BehaviorSubject<GithubCommit[]>([]);
  public loading = new BehaviorSubject<LoadingState>('loading');
  public repo = '';
  public owner = '';

  constructor(private route: ActivatedRoute,
              private githubService: GithubService) { }

  ngOnInit(): void {
    this.repo = this.route.snapshot.paramMap.get('repo') || '';
    this.owner = this.route.snapshot.paramMap.get('owner') || '';
    this.loading.next('loading');
    this.githubService.getCommits(this.owner, this.repo).subscribe(
      commits => {
        this.commits.next(commits);
        this.loading.next('ready')
      },
      err => {
        console.log(err);
        this.loading.next('error');
      }
    );
  }
}

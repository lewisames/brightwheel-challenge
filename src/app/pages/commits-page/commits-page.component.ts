import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { BehaviorSubject } from 'rxjs';
import { GithubCommit } from '../../models/githubCommit';

@Component({
  selector: 'app-commits-page',
  templateUrl: './commits-page.component.html',
  styleUrls: ['./commits-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommitsPageComponent implements OnInit {
  public commits = new BehaviorSubject<GithubCommit[]>([]);
  public loading = new BehaviorSubject<boolean>(false);

  constructor(private route: ActivatedRoute,
              private githubService: GithubService) { }

  ngOnInit(): void {
    const repo = this.route.snapshot.paramMap.get('repo') || '';
    const owner = this.route.snapshot.paramMap.get('owner') || '';
    this.loading.next(true);
    this.githubService.getCommits(owner, repo).subscribe(
      commits => this.commits.next(commits),
      err => console.log(err),
        () => this.loading.next(false)
    );
  }
}

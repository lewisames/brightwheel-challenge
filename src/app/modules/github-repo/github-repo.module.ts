import { NgModule } from '@angular/core';
import { GithubRepoCardComponent } from './components/github-repo-card/github-repo-card.component';
import { GithubRepoListComponent } from './components/github-repo-list/github-repo-list.component';
import { GithubRepoStatsComponent } from './components/github-repo-stats/github-repo-stats.component';
import { SharedModule } from '../shared/shared.module';
import { GithubAuthorModule } from '../github-author/github-author.module';


@NgModule({
  declarations: [
    GithubRepoCardComponent,
    GithubRepoListComponent,
    GithubRepoStatsComponent,
  ],
  imports: [
    SharedModule,
    GithubAuthorModule
  ],
  exports: [
    GithubRepoListComponent,
    GithubRepoCardComponent
  ]
})
export class GithubRepoModule {
}

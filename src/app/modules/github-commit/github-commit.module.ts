import { NgModule } from '@angular/core';
import { GithubCommitComponent } from './components/github-commit/github-commit.component';
import { GithubCommitsListComponent } from './components/github-commits-list/github-commits-list.component';
import { SharedModule } from '../shared/shared.module';
import { GithubAuthorModule } from '../github-author/github-author.module';


@NgModule({
  declarations: [
    GithubCommitComponent,
    GithubCommitsListComponent,
  ],
  imports: [
    SharedModule,
    GithubAuthorModule
  ],
  exports: [
    GithubCommitComponent,
    GithubCommitsListComponent,
  ]
})
export class GithubCommitModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubRepoCardComponent } from './components/github-repo-card/github-repo-card.component';
import { GithubRepoListComponent } from './components/github-repo-list/github-repo-list.component';
import { BrightwheelButtonComponent } from './components/brightwheel-button/brightwheel-button.component';
import { GithubRepoStatsComponent } from './components/github-repo-stats/github-repo-stats.component';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { CommitsPageComponent } from './pages/commits-page/commits-page.component';
import { BrightwheelHeaderComponent } from './components/brightwheel-header/brightwheel-header.component';
import { BrightwheelLoaderComponent } from './components/brightwheel-loader/brightwheel-loader.component';
import { GithubAvatarComponent } from './components/github-avatar/github-avatar.component';
import { GithubCommitsListComponent } from './components/github-commits-list/github-commits-list.component';
import { GithubAuthorComponent } from './components/github-author/github-author.component';
import { GithubCommitComponent } from './components/github-commit/github-commit.component';
import { BrightwheelErrorComponent } from './components/brightwheel-error/brightwheel-error.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubRepoCardComponent,
    GithubRepoListComponent,
    BrightwheelButtonComponent,
    GithubAvatarComponent,
    GithubAuthorComponent,
    GithubRepoStatsComponent,
    RepositoryPageComponent,
    CommitsPageComponent,
    GithubCommitComponent,
    GithubCommitsListComponent,
    BrightwheelHeaderComponent,
    BrightwheelLoaderComponent,
    BrightwheelErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

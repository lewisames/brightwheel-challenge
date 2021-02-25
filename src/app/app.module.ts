import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { BrightwheelButtonComponent } from './components/brightwheel-button/brightwheel-button.component';
import { BrightwheelAvatarComponent } from './components/brightwheel-avatar/brightwheel-avatar.component';
import { AuthorComponent } from './components/author/author.component';
import { RepoStatsComponent } from './components/repo-stats/repo-stats.component';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { CommitsPageComponent } from './pages/commits-page/commits-page.component';
import { RepoTitleComponent } from './components/repo-title/repo-title.component';
import { CommitComponent } from './components/commit/commit.component';
import { CommitsListComponent } from './components/commits-list/commits-list.component';
import { BrightwheelHeaderComponent } from './components/brightwheel-header/brightwheel-header.component';
import { BrightwheelLoaderComponent } from './components/brightwheel-loader/brightwheel-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoCardComponent,
    RepoListComponent,
    BrightwheelButtonComponent,
    BrightwheelAvatarComponent,
    AuthorComponent,
    RepoStatsComponent,
    RepositoryPageComponent,
    CommitsPageComponent,
    RepoTitleComponent,
    CommitComponent,
    CommitsListComponent,
    BrightwheelHeaderComponent,
    BrightwheelLoaderComponent,
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

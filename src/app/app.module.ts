import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { CommitsPageComponent } from './pages/commits-page/commits-page.component';
import { BrightwheelHeaderComponent } from './components/brightwheel-header/brightwheel-header.component';
import { GithubRepoModule } from './modules/github-repo/github-repo.module';
import { GithubCommitModule } from './modules/github-commit/github-commit.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BrightwheelHeaderComponent,
    RepositoryPageComponent,
    CommitsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GithubRepoModule,
    GithubCommitModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

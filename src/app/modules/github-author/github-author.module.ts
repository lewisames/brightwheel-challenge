import { NgModule } from '@angular/core';
import { GithubAvatarComponent } from './components/github-avatar/github-avatar.component';
import { GithubAuthorComponent } from './components/github-author/github-author.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    GithubAvatarComponent,
    GithubAuthorComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GithubAvatarComponent,
    GithubAuthorComponent,
  ]
})
export class GithubAuthorModule {
}

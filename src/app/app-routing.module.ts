import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryPageComponent } from './pages/repository-page/repository-page.component';
import { CommitsPageComponent } from './pages/commits-page/commits-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'repos'
  },
  {
    path: 'repos',
    component: RepositoryPageComponent
  },
  {
    path: 'repo/:owner/:repo/commits',
    component: CommitsPageComponent
  },
  {
    path: '**',
    redirectTo: 'repos'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

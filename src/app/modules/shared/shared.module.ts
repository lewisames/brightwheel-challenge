import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrightwheelButtonComponent } from './components/brightwheel-button/brightwheel-button.component';
import { BrightwheelLoaderComponent } from './components/brightwheel-loader/brightwheel-loader.component';
import { BrightwheelErrorComponent } from './components/brightwheel-error/brightwheel-error.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BrightwheelButtonComponent,
    BrightwheelLoaderComponent,
    BrightwheelErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    BrightwheelButtonComponent,
    BrightwheelLoaderComponent,
    BrightwheelErrorComponent,
  ]
})
export class SharedModule {
}

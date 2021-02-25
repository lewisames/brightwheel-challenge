import { Component, Input } from '@angular/core';

@Component({
  selector: 'brightwheel-avatar',
  templateUrl: './brightwheel-avatar.component.html',
  styleUrls: ['./brightwheel-avatar.component.scss']
})
export class BrightwheelAvatarComponent {
  @Input() img = '';
  public loading = true;
  public loadingColor: string;

  private colors = ['blue', 'pink', 'yellow'];

  constructor() {
    this.loadingColor = this.bgColor();
  }

  bgColor(): string {
    const idx = Math.floor(Math.random() * Math.floor(this.colors.length));
    return this.colors[idx];
  }

}

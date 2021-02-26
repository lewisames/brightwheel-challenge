import { Component, Input } from '@angular/core';

@Component({
  selector: 'github-avatar',
  templateUrl: './github-avatar.component.html',
  styleUrls: ['./github-avatar.component.scss']
})
export class GithubAvatarComponent {
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

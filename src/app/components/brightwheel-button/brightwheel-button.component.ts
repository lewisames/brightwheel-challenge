import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[brightwheel-button]',
  templateUrl: './brightwheel-button.component.html',
  styleUrls: ['./brightwheel-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrightwheelButtonComponent {
  @Input() public theme: 'primary' | 'secondary' = 'primary';

  constructor() {
  }

  @HostBinding('class') get themeClass(): string {
    return `brightwheel-button-${this.theme}`;
  }

}

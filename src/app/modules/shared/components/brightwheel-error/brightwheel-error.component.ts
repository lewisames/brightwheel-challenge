import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brightwheel-error',
  templateUrl: './brightwheel-error.component.html',
  styleUrls: ['./brightwheel-error.component.scss']
})
export class BrightwheelErrorComponent implements OnInit {
  @Input() public msg = 'Something went wrong, please try again';
  constructor() { }

  ngOnInit(): void {
  }

}

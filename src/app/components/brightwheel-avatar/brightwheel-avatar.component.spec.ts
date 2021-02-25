import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightwheelAvatarComponent } from './brightwheel-avatar.component';

describe('BrightwheelAvatarComponent', () => {
  let component: BrightwheelAvatarComponent;
  let fixture: ComponentFixture<BrightwheelAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrightwheelAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightwheelAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

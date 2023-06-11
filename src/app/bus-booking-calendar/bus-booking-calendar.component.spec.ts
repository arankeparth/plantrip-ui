import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingCalendarComponent } from './bus-booking-calendar.component';

describe('BusBookingCalendarComponent', () => {
  let component: BusBookingCalendarComponent;
  let fixture: ComponentFixture<BusBookingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

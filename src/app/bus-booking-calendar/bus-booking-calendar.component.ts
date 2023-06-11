import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-booking-calendar',
  templateUrl: './bus-booking-calendar.component.html',
  styleUrls: ['./bus-booking-calendar.component.scss']
})
export class BusBookingCalendarComponent {
  selectedDate: Date;

  onDateSelected(date: Date) {
    this.selectedDate = date;
    // Do something with the selected date, such as initiating the booking process
  }
}

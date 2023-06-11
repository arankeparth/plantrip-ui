import { Component, Input } from '@angular/core';
import { CalData } from './calendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  months = [1,2,3,4,5,6,7,8,9,10,11,12]
  days : number[] = []
  years : number[] = []
  currYr: number
  daySelected
  monthSelected
  yearSelected
  @Input() calData : CalData
  ngOnInit() {
    this.currYr = this.getCurrYr()
    for(let i=1;i<31;i++)
      this.days.push(i)
    for(let i=this.currYr; i<this.currYr+10;i++)
      this.years.push(i)
  }
  getCurrYr() {
    return (new Date()).getFullYear()
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Schedule } from './vheiclelist.model';

@Component({
  selector: 'app-vheiclelist',
  templateUrl: './vheiclelist.component.html',
  styleUrls: ['./vheiclelist.component.scss']
})
export class VheiclelistComponent {
  schedules : Schedule[] 
  dateObj : Date
  @Input() showPopup = false
  @Output() showPopupChange = new EventEmitter<boolean>();
  
  ngOnInit() {
    this.dateObj = new Date()
    this.schedules = [
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500},
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500},
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500},
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500},
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500}
    ]
  }

  onClickBook() {
    
  }

  onCancel() {
    this.showPopupChange.emit(false);
    this.showPopup = false
  }

}

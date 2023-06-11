import { Component } from '@angular/core';

@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})
export class RouteSelectorComponent {
  selectedFromCity = ""
  selectedToCity = ""
  FromDisabled = true
  dateObj : Date
  schedules = []
  ToDisabled = true
  cities = ["Nashik", "Pune"]
  trainStations = ["s1", "s2"]
  airports = ["a1", "a2"]
  busSelected = true
  trainSelected = false
  planeSelected = false
  showList = false
  stops = this.cities
  ngOnInit() {
    this.dateObj = new Date()
    this.schedules = [
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500},
      {"timing": this.dateObj.getHours()  + ":" + this.dateObj.getMinutes() ,"company":"msrtc", "busName":"shivshahi", "price":500}
    ]
  }

  onSelectMode(mode: string) {
    this.busSelected = false
    this.trainSelected = false
    this.planeSelected = false
    if (mode === "bus") {
      this.stops = this.cities
      this.busSelected = true
    } 
    if(mode === "train") {
      this.stops = this.trainStations
      this.trainSelected = true
    }
    if(mode === "plane") {
      this.stops = this.airports
      this.planeSelected = true
    }

  }

  onReverse() {
    let temp = this.selectedToCity
    this.selectedToCity = this.selectedFromCity
    this.selectedFromCity = temp
  }

  showFromOptions() {
    this.FromDisabled = false
  }

  showToOptions() {
    this.ToDisabled = false
  }

  onShowAvailableBookings() {
    this.showList = true
  }

  onCancelPopup() {
    this.showList = false
  }
}

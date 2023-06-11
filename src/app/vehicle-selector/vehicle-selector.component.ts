import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-selector',
  templateUrl: './vehicle-selector.component.html',
  styleUrls: ['./vehicle-selector.component.scss']
})
export class VehicleSelectorComponent {
  buttStyleBus = ""
  buttStyleTrain = ""
  buttStylePlane = ""
  busSelected = true
  trainSelected = false
  planeSelected = false

 @Output() selectEventEmitter = new EventEmitter<string>();

  ngOnInit() {
    
  }

  onSelectBus() {
    this.busSelected = true
    this.buttStyleTrain = ""
    this.trainSelected = false
    this.buttStylePlane = ""
    this.planeSelected = false
    this.selectEventEmitter.emit("bus")
  }
  onSelectTrain() {
    this.buttStyleBus = ""
    this.busSelected = false
    this.trainSelected = true
    this.buttStylePlane = ""
    this.planeSelected = false
    this.selectEventEmitter.emit("train")
  }
  onSelectPlane() {
    this.buttStyleBus = ""
    this.busSelected = false
    this.buttStyleTrain = ""
    this.trainSelected = false
    this.planeSelected = true
    this.selectEventEmitter.emit("plane")
  }

  isBusSelected() {
    return this.busSelected
  }

  isPlaneSelected() {
    return this.planeSelected
  }

  isTrainSelected() {
    return this.trainSelected
  }
}

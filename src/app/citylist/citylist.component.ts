import { Component } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent {
  selectedCity
  cities = ["Pune", "Nashik"]
}

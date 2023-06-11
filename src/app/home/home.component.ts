import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUtilsModule } from '../auth-utils/auth-utils.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  validToken=false
  token
  eventSubscription
  constructor(private router: Router, private authModule: AuthUtilsModule) {
    this.eventSubscription = authModule.getEvent().subscribe((validToken) => {
      this.validToken = validToken
      if(!this.validToken) {
        this.router.navigate(['/login']);
      }
    })
  }
  async ngOnInit() {
    if (localStorage.getItem("token") != null ) {
      this.authModule.isTokenValid()
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}

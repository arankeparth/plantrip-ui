import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginBoxComponent } from './loginBox/loginBox.component';
import { FormsModule } from "@angular/forms";
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'
import { AuthUtilsModule } from './auth-utils/auth-utils.module';
import { HomeComponent } from './home/home.component';
import { BgChangeDirective } from './bg-change.directive';
import { OffersComponent } from './offers/offers.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RouteSelectorComponent } from './route-selector/route-selector.component';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';
import { HttpClientModule } from '@angular/common/http'
import { OfferComponent } from './offer/offer.component';
import { OffersApi } from './offers/offers.apis';
import { ErrorComponent } from './error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitylistComponent } from './citylist/citylist.component';
import { BusBookingCalendarComponent } from './bus-booking-calendar/bus-booking-calendar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { VheiclelistComponent } from './vheiclelist/vheiclelist.component';

const routes: Routes = [
  { path: 'login/:visible', component: LoginBoxComponent},
  { path: 'login', component: LoginBoxComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    RegisterComponent,
    HomeComponent,
    BgChangeDirective,
    OffersComponent,
    SlideShowComponent,
    ReviewsComponent,
    RouteSelectorComponent,
    VehicleSelectorComponent,
    OfferComponent,
    ErrorComponent,
    CitylistComponent,
    BusBookingCalendarComponent,
    CalendarComponent,
    VheiclelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthUtilsModule,
    HttpClientModule,
    OffersApi,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

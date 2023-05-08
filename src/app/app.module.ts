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
import { OfferComponent } from './offer/offer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
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
    OfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthUtilsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

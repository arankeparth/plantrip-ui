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
const routes: Routes = [
  { path: 'login', component: LoginBoxComponent},
  { path: 'register', component: RegisterComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AuthUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

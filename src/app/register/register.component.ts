import { Component, HostListener } from '@angular/core';
import { AuthUtilsModule } from "../auth-utils/auth-utils.module";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styleUrls: ['../loginBox/loginBox.component.scss'],
})

export class RegisterComponent {
  emailError = ""
  passError = ""
  pass = ""
  cPass = ""
  email = ""
  emailBorderClass = ""
  authUtils: AuthUtilsModule = new AuthUtilsModule(this.http)
  PassBorderClass = ""
  loginStyle_cancel_butt = ""
  getScreenWidth = 0
  loginLink = ""
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth >= 1098) {
      this.loginStyle_cancel_butt = "visibility: hidden"
      this.loginLink = "/login"
    }  else {
      this.loginStyle_cancel_butt = "visibility: visible"
      this.loginLink = "/login/1"
    }
  }
  onUpdatePass(event: Event) {
    this.pass = (<HTMLInputElement>event.target).value
    if (this.pass != this.cPass) {
      this.PassBorderClass = "red-border";
      this.passError = "Passwords do not match!"
    } else {
      if (this.pass == "") {
        this.PassBorderClass = "";
      }
      else
        this.PassBorderClass = "green-border";
      this.passError = ""
    }
  }

  onUpdateCPass(event: Event) {
    this.cPass = (<HTMLInputElement>event.target).value
    if (this.pass != this.cPass) {
      this.PassBorderClass = "red-border";
      this.passError = "Passwords do not match!"
    } else {
      if (this.pass == "") {
        this.PassBorderClass = "";
      }
      else
        this.PassBorderClass = "green-border";
      this.passError = ""
    }
  }

  onUpdateEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
    const ve = this.authUtils.isValidEmail(this.email)
    if (ve) {
      this.emailBorderClass = "green-border";
      this.emailError = ""
    } else if (!ve && this.email != "") {
      this.emailBorderClass = "red-border";
      this.emailError = "Invalid email id"
    } else {
      this.emailBorderClass = "";
      this.emailError = ""
    }
  }

  onHoverEmail(event: Event, eventCode: number) {
    if (eventCode == 0) {

    }
  }

  onCancel() {
    this.loginStyle_cancel_butt = "visibility: hidden"
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth >= 1098) {
      this.loginStyle_cancel_butt = "visibility: hidden"
      this.loginLink = "/login"
    }  else {
      this.loginStyle_cancel_butt = "visibility: visible"
      this.loginLink = "['/login', 1]"
    }
  }

}

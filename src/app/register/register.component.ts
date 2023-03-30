import { Component } from '@angular/core';
import {  AuthUtilsModule } from "../auth-utils/auth-utils.module";

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailError = ""
  passError = ""
  pass = ""
  cPass = ""
  email = ""
  emailBorderClass = ""
  authUtils : AuthUtilsModule = new AuthUtilsModule
  PassBorderClass = ""
  
  onUpdatePass(event:Event) {
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

  onUpdateCPass(event:Event) {
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

  onUpdateEmail(event:Event) {
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

  onHoverEmail(event:Event, eventCode:number) {
    if (eventCode == 0) {
      
    }
  }

}

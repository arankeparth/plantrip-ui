import { Component } from "@angular/core";
import {  AuthUtilsModule } from "../auth-utils/auth-utils.module";
@Component({
    selector: 'login-from',
    templateUrl: './loginBox.component.html',
    styleUrls: ['./loginBox.component.css']
})
export class LoginBoxComponent {
    title = "loginBox";
    allowLogin = false;
    buttClass = "auth-butt";
    email = "";
    pass = "";
    emailBorderClass = ""
    passBorderClass = ""
    error = ""
    authUtils : AuthUtilsModule = new AuthUtilsModule
    ngOnInit() {
    }

    onUpdateEmail(event:Event) {
        this.email = (<HTMLInputElement>event.target).value;
        const ve = this.authUtils.isValidEmail(this.email)
        if (ve) {
            this.emailBorderClass = "green-border";
            this.error = ""
        } else if (!ve && this.email != "") {
            this.emailBorderClass = "red-border";
            this.error = "Invalid email id"
        } else {
            this.emailBorderClass = "";
            this.error = ""
        }
    }

    onUpdatePass(event:Event) {
        this.pass = (<HTMLInputElement>event.target).value;
        if (this.pass != "" && this.authUtils.isValidEmail(this.email)) {
            this.allowLogin = true;
        } else {
            this.allowLogin = false;
        }
    }

    loginWithGoogle() {
        
    }
}
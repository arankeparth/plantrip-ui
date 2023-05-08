import { Component, HostListener } from "@angular/core";
import {  AuthUtilsModule } from "../auth-utils/auth-utils.module";
import { ActivatedRoute} from '@angular/router';

@Component({
    selector: 'login-from',
    templateUrl: './loginBox.component.html',
    styleUrls: ['./loginBox.component.scss']
})
export class LoginBoxComponent {
    title = "loginBox";
    allowLogin = "";
    buttClass = "auth-butt";
    email = "";
    getScreenWidth = 0
    pass = "";
    emailBorderClass = ""
    passBorderClass = ""
    error = ""
    authUtils : AuthUtilsModule = new AuthUtilsModule
    loginStyle = ""
    logoStyle = "visibility: visible;"
    loginStyle_cancel_butt = ""
    loginFlag = false
    navStyle = ""

    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        this.allowLogin = this.route.snapshot.paramMap.get('visible')
        if (this.allowLogin == "0" || this.allowLogin == "") {
            this.loginStyle = "visibility : hidden;"
            this.loginFlag = false
        } else if(this.allowLogin == "1") {
            this.loginFlag = true
            this.loginStyle = "visibility: visible;"
            this.loginStyle_cancel_butt = "visibility: visible"
            this.logoStyle = "visibility: hidden"
            this.navStyle = "visibility:hidden"
        }
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
        
    }

    loginWithGoogle() {
        
    }

    showLogin() {
        this.loginFlag = true
        this.loginStyle = "visibility: visible;"
        this.loginStyle_cancel_butt = "visibility: visible"
        this.logoStyle = "visibility: hidden;"
        this.navStyle = "visibility: hidden;"
    }

    onCancel() {
        this.loginFlag = false
        this.loginStyle = "visibility: hidden;"
        this.loginStyle_cancel_butt = "visibility: hidden"
        this.logoStyle = "visibility: visible"
        this.navStyle = "visibility: visible"
    }

    showRegister() {
        if (window.innerWidth <= 1097) {
            this.loginStyle_cancel_butt = "visibility: visible"
        }
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize() {
      this.getScreenWidth = window.innerWidth;
      if (this.getScreenWidth >= 1098) {
        this.loginStyle = "visibility: visible"
        this.loginStyle_cancel_butt = "visibility: hidden"
        this.navStyle = "visibility: hidden"
        this.logoStyle = "visibility: visible"
      } else if(!this.loginFlag){
        this.loginStyle = "visibility: hidden;"
        this.loginStyle_cancel_butt = "visibility: hidden"
        this.navStyle = "visibility: visible"
        this.logoStyle = "visibility: visible"
      } else {
        this.loginStyle = "visibility: visible"
        this.loginStyle_cancel_butt = "visibility: visible"
        this.navStyle = "visibility: hidden"
        this.logoStyle = "visibility: hidden"
      }
    }
}
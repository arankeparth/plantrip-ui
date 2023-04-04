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
    

    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
        this.allowLogin = this.route.snapshot.paramMap.get('visible')
        if (this.allowLogin == "0" || this.allowLogin == "") {
            this.loginStyle = "visibility : hidden;"
            this.loginFlag = false
        } else if(this.allowLogin == "1") {
            this.loginFlag = true
            this.loginStyle = "visibility: visible; opacity: 1; background-image: linear-gradient(180deg, rgba(1, 14, 13, 0.6) 0%, rgba(10, 57, 68, 0.6) 100%), url(../../assets/mountains-winter-daytime-glacier-blue-mountain-range-5k-6000x3376-1248.jpg); background-size:cover"
            this.loginStyle_cancel_butt = "visibility: visible"
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
        this.loginStyle = "visibility: visible; opacity: 1; background-image: linear-gradient(180deg, rgba(1, 14, 13, 0.6) 0%, rgba(10, 57, 68, 0.6) 100%), url(../../assets/mountains-winter-daytime-glacier-blue-mountain-range-5k-6000x3376-1248.jpg); background-size:cover"
        this.loginStyle_cancel_butt = "visibility: visible"
    }

    onCancel() {
        this.loginFlag = false
        this.loginStyle = "visibility: hidden;"
        this.loginStyle_cancel_butt = "visibility: hidden"
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
      } else if(!this.loginFlag){
        this.loginStyle = "visibility: hidden;"
        this.loginStyle_cancel_butt = "visibility: hidden"
      } else {
        this.loginStyle = "visibility: visible; opacity: 1; background-image: linear-gradient(180deg, rgba(1, 14, 13, 0.6) 0%, rgba(10, 57, 68, 0.6) 100%), url(../../assets/mountains-winter-daytime-glacier-blue-mountain-range-5k-6000x3376-1248.jpg); background-size:cover"
        this.loginStyle_cancel_butt = "visibility: visible"
      }
    }
}
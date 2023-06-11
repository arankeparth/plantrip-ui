import { Component, HostListener } from "@angular/core";
import { AuthUtilsModule } from "../auth-utils/auth-utils.module";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { LoginResponse } from "./loginBox.model";
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
    IsError = false
    error = ""
    authUtils: AuthUtilsModule = new AuthUtilsModule(this.http)
    loginStyle = ""
    logoStyle = "visibility: visible;"
    loginStyle_cancel_butt = ""
    loginFlag = false
    navStyle = ""
    username = ""
    loginResponse: LoginResponse
    constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
    ngOnInit() {
        this.allowLogin = this.route.snapshot.paramMap.get('visible')
        if (this.allowLogin == "0" || this.allowLogin == "") {
            this.loginStyle = "visibility : hidden;"
            this.loginFlag = false
        } else if (this.allowLogin == "1") {
            this.loginFlag = true
            this.loginStyle = "visibility: visible;"
            this.loginStyle_cancel_butt = "visibility: visible"
            this.logoStyle = "visibility: hidden"
            this.navStyle = "visibility:hidden"
        }
    }

    onUpdateEmail(event: Event) {
        this.email = (<HTMLInputElement>event.target).value;
        const ve = this.authUtils.isValidEmail(this.email)
        if (ve) {
            this.emailBorderClass = "green-border";
            this.IsError = false
        } else if (!ve && this.email != "") {
            this.emailBorderClass = "red-border";
            this.error = "Invalid email id"
            this.IsError = true
        } else {
            this.emailBorderClass = "";
            this.IsError = false
        }
    }

    onUpdatePass(event: Event) {

    }

    loginWithGoogle() {

    }
    
    showError(error: HttpErrorResponse) {
        console.log(error.error);
    
    }

    goToHomePage() {
        this.router.navigate(['/home']);

    }

    onClickLogin() {
        const url = 'http://localhost:8080/authapi/v1/login'; // Replace with your login URL

        const body = {
            username: this.username,
            password: this.pass
        };

        this.http.post(url, body).subscribe(
            (response: LoginResponse) => {
                // console.log(response.auth_token)
                // console.log(response.public_key.replace(/\n/, ''))
                if (response.is_loggedin == true) {
                    localStorage.setItem("pub_key", response.public_key)
                    localStorage.setItem("token", response.auth_token)
                    localStorage.setItem("customerid", response.customerid)
                    this.goToHomePage()
                } else {
                    this.error="Invalid username or password"
                    this.IsError = true
                }
            },
            (error) => {
                this.error="Internal error"
                this.IsError = true
            }
        );
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
        } else if (!this.loginFlag) {
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
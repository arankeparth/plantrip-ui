import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyJwtResponse } from './auth-utils.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class AuthUtilsModule { 

  constructor(private http: HttpClient) {}
  eventSubject = new Subject<any>();

    emitEvent(eventData: any) {
      this.eventSubject.next(eventData);
    }
    
    getEvent() {
      return this.eventSubject.asObservable();
    }
  isValidEmail(email:string) {
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return expression.test(email);
  }

  isValidPassword(pass:string) {

  }

  isTokenValid() {
    console.log(localStorage.getItem("token"))
    let body = {
      "token_string":localStorage.getItem("token"),
      "pub_key_string": localStorage.getItem("pub_key").replace(/(\r\n|\n|\r)/gm, "").replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", "")
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
    const url = 'http://localhost:8080/authapi/v1/verifyjwt'
   let r_val=false
   this.http.post(url, body, {headers}).subscribe(
          (response: VerifyJwtResponse) => {
            this.emitEvent(true)
          },
          (error) => {
            this.emitEvent(false)
          }
      );
  }
}

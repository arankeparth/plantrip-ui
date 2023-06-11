import { NgModule } from "@angular/core";
import { Offer } from "./offers.model";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@NgModule({
    declarations: [],
    imports: [
      
    ],
  })

export class OffersApi {
    customerid
    offersList: Offer[]
    constructor(private http: HttpClient) {}
    eventSubject = new Subject<any>();

    emitEvent(eventData: any) {
      this.eventSubject.next(eventData);
    }
    
    getEvent() {
      return this.eventSubject.asObservable();
    }

    getOffers(offers: Offer[]){
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorage.getItem("token"))
      .set('public_key', localStorage.getItem("pub_key").replace(/(\r\n|\n|\r)/gm, "").replace("-----BEGIN PUBLIC KEY-----", "").replace("-----END PUBLIC KEY-----", ""))
      this.customerid = localStorage.getItem("customerid")
      const url = 'http://localhost:5000/customerApi/v1/getoffers/'+ this.customerid;
      this.http.get(url, {headers}).subscribe(
            (response: Offer[]) => {
                this.emitEvent(response)
            },
            (error) => {
              console.log(error)
            }
        );
    }
    
}
import { Component, HostListener } from '@angular/core';
import { Offer } from './offers.model';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  offerStyle = ""
  currOffer = 0
  prevOfferDisabled = true
  nextOfferDisabled = false
  nVisibleOffers = 0
  offersWindowWidth = 96 //in pixel
  offerWidth = 15.4 // in rem
  pixel = 16 // pixel equivalent of 1 rem 
  offerMargin = 1
  offerUl = 0
  offers : Offer[] = [
    {title: "50% off", description: "For axis bank credit card users"},
    {title: "50% off", description: "For axis bank credit card users"},
    {title: "50% off", description: "For axis bank credit card users"},
    {title: "50% off", description: "For axis bank credit card users"},
    {title: "50% off", description: "For axis bank credit card users"},
    {title: "50% off", description: "For axis bank credit card users"},
    {title: "50% off", description: "For axis bank credit card users"},
  ]
  nOffers = this.offers.length
  ngOnInit() {
    this.nVisibleOffers = Math.floor(((window.innerWidth - this.offersWindowWidth) + this.offerMargin*this.pixel)/((this.offerMargin + this.offerWidth)*this.pixel))
    this.offerUl = Math.ceil(this.nOffers/this.nVisibleOffers)
    if(this.nVisibleOffers >= this.nOffers) {
      this.nextOfferDisabled = true
    }
  }
  nextOffer() {
    this.currOffer++
    this.triggerOfferTransition()
  }

  prevOffer() {
    this.currOffer--
    this.triggerOfferTransition()
  }

  triggerOfferTransition() {
    if( this.currOffer >= this.offerUl - 1) {
      this.nextOfferDisabled = true
    } else {
      this.nextOfferDisabled = false
    } 

    if( this.currOffer == 0 ) {
      this.prevOfferDisabled = true
    } else {
      this.prevOfferDisabled = false
    } 
    let offset = (this.offerWidth*this.pixel + this.offerMargin*this.pixel)*this.currOffer*this.nVisibleOffers
    this.offerStyle = "transition: all 0.3s;transform: translateX(-" + String(offset) + "px);"
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(){
    this.currOffer = 0
    console.log(this.nVisibleOffers)
    this.nVisibleOffers = Math.floor(((window.innerWidth - this.offersWindowWidth) + this.offerMargin*this.pixel)/((this.offerMargin + this.offerWidth)*this.pixel))
    this.offerUl = Math.ceil(this.nOffers/this.nVisibleOffers)
    console.log(this.nVisibleOffers)
    if(this.nVisibleOffers >= this.nOffers) {
      this.nextOfferDisabled = true
    } 
    else
      this.nextOfferDisabled = false
    this.prevOfferDisabled = true
    this.offerStyle = "transition: all 0.3s;transform: translateX(0);"
  }
}

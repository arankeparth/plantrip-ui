import { Component, HostListener } from '@angular/core';
import { Offer } from './offers.model';
import { OffersApi } from './offers.apis';
import { timeout } from 'rxjs';
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
  offerWidth = 15 // in rem
  pixel = 16 // pixel equivalent of 1 rem 
  offerMargin = 1 // in rem
  offerUl = 0
  offers: Offer[]
  nOffers = 0
  display = true
  eventSubscription
  constructor(private offerApi: OffersApi) {
    this.eventSubscription = this.offerApi.getEvent().subscribe((offersList) => {
      this.offers = offersList
      this.nOffers = this.offers.length
      this.nVisibleOffers = Math.floor(((window.innerWidth - this.offersWindowWidth) + this.offerMargin * this.pixel) / ((this.offerMargin + this.offerWidth) * this.pixel))
      this.offerUl = Math.ceil(this.nOffers / this.nVisibleOffers)
      if (this.nVisibleOffers >= this.nOffers) {
        this.nextOfferDisabled = true
      }
    });
  }

  ngOnInit() {
    this.offers = []
    this.offerApi.getOffers(this.offers)
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
    if (this.currOffer >= this.offerUl - 1) {
      this.nextOfferDisabled = true
    } else {
      this.nextOfferDisabled = false
    }

    if (this.currOffer == 0) {
      this.prevOfferDisabled = true
    } else {
      this.prevOfferDisabled = false
    }
    let offset = (this.offerWidth * this.pixel + this.offerMargin * this.pixel) * this.currOffer * this.nVisibleOffers
    this.offerStyle = "transition: all 0.3s;transform: translateX(-" + String(offset) + "px);"
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.currOffer = 0
    this.nVisibleOffers = Math.floor(((window.innerWidth - this.offersWindowWidth) + this.offerMargin * this.pixel) / ((this.offerMargin + this.offerWidth) * this.pixel))
    this.offerUl = Math.ceil(this.nOffers / this.nVisibleOffers)
    console.log(this.nVisibleOffers)
    if (this.nVisibleOffers >= this.nOffers) {
      this.nextOfferDisabled = true
    }
    else
      this.nextOfferDisabled = false
    this.prevOfferDisabled = true
    this.offerStyle = "transition: all 0.3s;transform: translateX(0);"
  }

  ngOnDestroy() {
    // Unsubscribe from the event to avoid memory leaks
    this.eventSubscription.unsubscribe();
  }
}

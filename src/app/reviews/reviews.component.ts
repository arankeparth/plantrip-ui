import { Component, HostListener, OnInit } from '@angular/core';
import { Review } from './review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  imageList = [
      "background-image: url(./../../assets/u1.jpg);",
      "background-image: url(./../../assets/u2.jpg);",
      "background-image: url(./../../assets/u3.jpg);",
  ]
  reviews: Review[] = [
    { uName: "Ashley", title: 'Great product', text: 'I love this product. It works perfectly and has made my life easier.', rating: 5 },
    { uName: "John", title: 'Good product', text: 'This product is pretty good. It has a few minor flaws, but overall it gets the job done.', rating: 4 },
    { uName: "Rahul", title: 'Not impressed', text: ' It didn\'t work as advertised and was a waste of money.', rating: 2 }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  isWide = true
  constructor() { }
  currReview 
  reviewIndex = 0
  mode = 1
  nReviews = 3
  ngOnInit(): void {
    this.currReview = this.reviews[0]
    if ( window.innerWidth <= 1052) {
      this.isWide = false
      this.mode = 0
      setTimeout(this.rChange, 4000)
    } else {
      this.isWide = true
      this.mode = 1
    }
  }
 
  rChange = () => {
    if (this.mode == 0) {
      this.reviewIndex = ( this.reviewIndex + 1 )%this.nReviews
      this.currReview = this.reviews[this.reviewIndex]
      setTimeout(this.rChange, 4000)
      }
    }
  

  @HostListener('window:resize', ['$event'])
  onWindowResize(){
    if ( window.innerWidth <= 1052)  {
      if (this.mode==1) {
        this.reviewIndex = 0
        this.currReview = this.reviews[this.reviewIndex]
        this.isWide = false
        this.mode = 0
        setTimeout(this.rChange, 4000)
      }
      
    } else {
      this.isWide = true
      this.mode = 1 
    }
  }
}

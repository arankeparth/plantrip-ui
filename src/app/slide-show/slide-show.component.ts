import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent {
  visible = [
    false, false, false, false, false
  ]
  slides = [
   "s1","s2","s3","s4","s5"

  ]
  currSlide = 0
  mode = 0
  nSlides = this.visible.length

  constructor(private router: Router) { }

  ngOnInit() {
    this.visible[0] = true
    setTimeout(this.bgChange, 7000)
  }

  bgChange = () => {
    if (this.mode == 0) {
      this.visible[this.currSlide] = false
      this.currSlide = (this.currSlide + 1) % this.nSlides
      this.visible[this.currSlide] = true
      if (this.mode == 0) {
        setTimeout(this.bgChange, 7000)
      }
    }
  }

  onNext() {
    this.mode = 1
    this.visible[this.currSlide] = false
    this.currSlide = (this.currSlide + 1) % this.nSlides
    this.visible[this.currSlide] = true
  }

  onPrev() {
    this.mode = 1
    this.visible[this.currSlide] = false
    if (this.currSlide == 0) {
      this.currSlide = this.nSlides - 1
    }
    else {
      this.currSlide = (this.currSlide - 1) % this.nSlides
    }
    this.visible[this.currSlide] = true
  }

  // Auth functions
  onClickLogOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}

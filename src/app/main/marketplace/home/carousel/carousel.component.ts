import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() slides: Array<any> = [];
  @Input() contentOffsetToTop;
  public config: SwiperConfigInterface = {};
  public currentSlide;
  constructor() { }

  ngOnInit() {
    this.initCarousel();
    this.onIndexChange(0);
  }

  // ngAfterViewInit() {
  //   this.initCarousel();
  // }

  public initCarousel(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: 'slide'
    }
  }
  public onIndexChange(index: number) {
    this.currentSlide = this.slides[index];
  }
}

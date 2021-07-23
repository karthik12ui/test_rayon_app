import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-swiper-image-content',
  templateUrl: './swiper-image-content.component.html',
  styleUrls: ['./swiper-image-content.component.scss']
})
export class SwiperImageContentComponent implements OnInit {
  public config: SwiperConfigInterface = { };
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() sectionTitle: string;
  @Input() imageUrl: string;
  @Input() imagePostion: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  public contentList: any;
  constructor() { }

  ngOnInit() {
    this.contentList = this.content;
  }
  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 4,
      spaceBetween: 16,       
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,        
      loop: true,
      preloadImages: true,
      lazy: true,  
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        600: {
          slidesPerView: 2
        },
        960: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        }
      }
    }
  }
}

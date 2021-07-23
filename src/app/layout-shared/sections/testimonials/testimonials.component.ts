import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() sectionTitle: string;
  @Input() subtitle: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() gridStrokeColor: string;
  @Input() lineStrokeColor: string;
  public testimonials;
  public config: SwiperConfigInterface = { };
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  constructor() { }

  ngOnInit() {
    this.testimonials = this.content; 
  }

  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 1,
      spaceBetween: 0,       
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,        
      loop: false,
      preloadImages: false,
      lazy: true
    }
  }

}

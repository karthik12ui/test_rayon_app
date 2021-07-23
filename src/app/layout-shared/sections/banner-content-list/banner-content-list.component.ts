import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-content-list',
  templateUrl: './banner-content-list.component.html',
  styleUrls: ['./banner-content-list.component.scss']
})
export class BannerContentListComponent implements OnInit {
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() sectionTitle: string;
  @Input() subTitle: string;
  @Input() imageUrl: string;
  @Input() imagePostion: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() gridStrokeColor: string;
  @Input() lineStrokeColor: string;
  @Input() bannerBG: any;
  constructor() { }

  ngOnInit() {
  }

}

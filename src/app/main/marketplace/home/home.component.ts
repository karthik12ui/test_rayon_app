import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageContent: any;
  constructor(public homeService: HomeService) {
    this.pageContent = this.homeService.pageContent;
     // const data = this.store.select((state) => state);
  }

  ngOnInit() {
  }

}

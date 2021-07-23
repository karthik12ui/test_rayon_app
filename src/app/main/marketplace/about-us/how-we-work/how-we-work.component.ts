import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent implements OnInit {

  scrollTo:boolean;
  pageContent: any;
  constructor(public aboutUsService: AboutUsService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.aboutUsService.pageContent.howWeWork;
    this.scrollTo = false;
  }

  ngOnInit() {
  }

  scrollToView(viewProp) {
    if(!!viewProp.to && viewProp.to !==null && viewProp.to !== '') {
      this.scrollTo = true;
      const scroll = this.layoutSharedService.scrollToTrigger(viewProp);
      if(scroll) {
        this.scrollTo = false;
      }
    }
}
}

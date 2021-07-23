import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-rayonsoft',
  templateUrl: './rayonsoft.component.html',
  styleUrls: ['./rayonsoft.component.scss']
})
export class RayonsoftComponent implements OnInit {


  scrollTo:boolean;
  pageContent: any;
  constructor(public aboutUsService: AboutUsService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.aboutUsService.pageContent.aboutRayon;
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

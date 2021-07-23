import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { IndustriesService } from '../industries.service';

@Component({
  selector: 'app-life-science',
  templateUrl: './life-science.component.html',
  styleUrls: ['./life-science.component.scss']
})
export class LifeScienceComponent implements OnInit {
  scrollTo:boolean;
  pageContent: any;
  constructor(public rayonsoftIndustriesService: IndustriesService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftIndustriesService.pageContent.lifeScience;
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

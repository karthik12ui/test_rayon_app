import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { SolutionsService } from '../solutions.service';

@Component({
  selector: 'app-e-business-solutions',
  templateUrl: './e-business-solutions.component.html',
  styleUrls: ['./e-business-solutions.component.scss']
})
export class EBusinessSolutionsComponent implements OnInit {
  scrollTo:boolean;
  pageContent: any;
  constructor(public rayonsoftSolutionService: SolutionsService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftSolutionService.pageContent.ebuisness;
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

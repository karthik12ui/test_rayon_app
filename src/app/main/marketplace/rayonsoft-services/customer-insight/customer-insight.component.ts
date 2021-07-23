import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-customer-insight',
  templateUrl: './customer-insight.component.html',
  styleUrls: ['./customer-insight.component.scss']
})
export class CustomerInsightComponent implements OnInit {

  scrollTo:boolean;
  pageContent: any;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.customerInSight;
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

import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-enterprise-services',
  templateUrl: './enterprise-services.component.html',
  styleUrls: ['./enterprise-services.component.scss']
})
export class EnterpriseServicesComponent implements OnInit {

  pageContent: any;
  scrollTo: boolean;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, 
    public layoutSharedService: LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.enterpriseServices;
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
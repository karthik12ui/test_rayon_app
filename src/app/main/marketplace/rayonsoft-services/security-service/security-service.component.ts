import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-security-service',
  templateUrl: './security-service.component.html',
  styleUrls: ['./security-service.component.scss']
})
export class SecurityServiceComponent implements OnInit {

  pageContent: any;
  scrollTo: any;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, 
    public layoutSharedService: LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.securityService;
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

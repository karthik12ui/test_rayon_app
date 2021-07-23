import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.component.html',
  styleUrls: ['./cloud.component.scss']
})
export class CloudComponent implements OnInit {

  scrollTo:boolean;
  pageContent: any;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.cloud;
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

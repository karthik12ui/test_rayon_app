import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-artifical-intelligence',
  templateUrl: './artifical-intelligence.component.html',
  styleUrls: ['./artifical-intelligence.component.scss']
})
export class ArtificalIntelligenceComponent implements OnInit {
  scrollTo:boolean;
  pageContent: any;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.artificalIntelli;
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

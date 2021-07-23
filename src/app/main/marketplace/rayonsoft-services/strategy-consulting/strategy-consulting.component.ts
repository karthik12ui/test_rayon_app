import { SharedComponent } from './../../../../shared/shared.component';
import { Component, OnInit } from '@angular/core';
import { RayonsoftServicesService } from '../rayonsoft-services.service';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
declare var $: any;
@Component({
  selector: 'app-strategy-consulting',
  templateUrl: './strategy-consulting.component.html',
  styleUrls: ['./strategy-consulting.component.scss']
})
export class StrategyConsultingComponent implements OnInit {
  pageContent: any;
  scrollTo:boolean;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.strategyAndConsult;
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

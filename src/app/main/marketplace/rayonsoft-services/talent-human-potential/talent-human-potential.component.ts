import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-talent-human-potential',
  templateUrl: './talent-human-potential.component.html',
  styleUrls: ['./talent-human-potential.component.scss']
})
export class TalentHumanPotentialComponent implements OnInit {
  scrollTo:boolean;
  pageContent: any;
  constructor(public rayonsoftServicesService: RayonsoftServicesService, public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.talentAndHumanPotential;
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

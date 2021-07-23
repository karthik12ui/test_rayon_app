import { Component, Input, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  @Input() dataList: any;
  constructor(public layoutSharedService :LayoutSharedService) { }

  ngOnInit() {
    this.dataList.jobDetails.PreferredSkills =  this.dataList.jobDetails.PreferredSkills.slice(1, -1);
  }

  viewJobDetails(id) {
      const url = '/marketplace/careers/details/' + id 
      this.layoutSharedService.navigateInApp(url)
  }

}

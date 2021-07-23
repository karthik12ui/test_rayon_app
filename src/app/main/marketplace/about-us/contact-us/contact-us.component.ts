import { Component, OnInit } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { AboutUsService } from '../about-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  pageContent: any;
  constructor(public aboutUsService: AboutUsService, 
    public layoutSharedService :LayoutSharedService) {
    this.pageContent = this.aboutUsService.pageContent.contactUs;
  }
  ngOnInit() {
  }

}

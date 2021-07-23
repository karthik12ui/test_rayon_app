import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { companyDetails } from 'src/app/app.constant';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onMenuIconClick = new EventEmitter();
  appConst: any;
  constructor() {
    this.appConst = companyDetails
   }

  ngOnInit() {
  }
  public sidenavToggle(){
    this.onMenuIconClick.emit();
  }

}

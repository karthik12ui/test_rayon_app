import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { NavbarMenuItems } from 'src/app/layout-shared/navbar/navbar.items';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavbarMenu } from '../navbar/navbar.model';
import { MarketplaceTabsModel } from './marketplace-tabs.model';


@Component({
  selector: 'app-marketplace-tabs',
  templateUrl: './marketplace-tabs.component.html',
  styleUrls: ['./marketplace-tabs.component.scss']
})
export class MarketplaceTabsComponent implements OnInit {
  @Input() pageParentId: number;
  @Input() pageNavItems: any;
  @Input() selectplaceholder: any;
  @Input() pageId: any;
  @Output() scrollToEvent = new EventEmitter()
  selectedOptionsForm: any;
  selectedOption : number;
  childMenu: any;
  display: boolean;
  constructor(public layoutSharedService: LayoutSharedService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
      this.display = false;
      this.transformMainMenu(NavbarMenuItems);
  }
  transformMainMenu(menuItems) {
    menuItems.forEach(item => {
        if(item.hasSubMenu) {
          const subMenu = [];
          menuItems.forEach(subItem => {
            if(item.id === subItem.parentId) {
              subMenu.push(subItem);
            }
          })
          item.subChildList = subMenu
        }
    })
    const filterByParentId = menuItems.filter(li => li.parentId === this.pageParentId);
    const getAllSubChildList = [];
    if(filterByParentId.length > 0) {
      filterByParentId.map(gi => {
            if(gi.subChildList.length > 0){
              gi.subChildList.map(fi => {
                getAllSubChildList.push(fi);
              })
            }
      })
    }
    this.childMenu = getAllSubChildList;

    let filterByPageId = [];
    if(!!this.pageId && this.pageId !== null) {
       filterByPageId =  this.childMenu.filter(li => li.id === this.pageId);
    }
    if(filterByPageId.length > 0) {
      this.updateModel(filterByPageId[0].id);
    } else {
      this.updateModel(this.childMenu[0].id);
    }
  }

  updateModel(id) {
   this.selectedOption = id; 
    this.setFormInit();
  }

  navigateInApp(link) {
    if(!!link && link !== null && link !== '') {
      this.layoutSharedService.navigateInApp(link)
    }
  }


  selectionOfDropdown(data) {
    const filter = this.childMenu.filter(li => li.id === this.selectedOption);
    if(filter.length > 1) {
      this.navigateInApp(filter[1].routerLink);
    }
  }

  scrollTo(id) {
    const data = {
      to: id,
      offsetParam: 500,
      speedParam: 3000
    }
    this.scrollToEvent.emit(data)
  }


  // ===========================================================================
//  Select options form
// =============================================================================
setFormInit() {
  this.selectedOptionsForm = this.formBuilder.group({
    options: new FormControl(this.selectedOption, Validators.compose([
    ]
    )),
  })
  this.display = true;
}
}

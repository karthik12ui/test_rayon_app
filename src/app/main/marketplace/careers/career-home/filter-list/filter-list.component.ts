import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterValueFlag } from '../../careers.model';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() filterList: any;
  @Output() onSelectionFilter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  updateFilterSelection(value, flag) {
    let data = {
      value:value,
      flag: flag,
      filterID: this.filterList.filterID
    }
    if(!flag) {
      data.flag = true
    } else {
      data.flag = false
    }
    this.onSelectionFilter.emit(data)
  }
}

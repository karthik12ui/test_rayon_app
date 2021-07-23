import { filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.scss']
})
export class FilterJobsComponent implements OnInit {
  filterList: any;
  @Input() dataList: any;
  @Input() totalResults: any;
  
  @Output() onChangeFilter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.filterList = this.dataList;
  }
  public changeViewType(){
    
    this.onChangeFilter.emit();
  }

  updatedSelection($event) {
   this.filterList.map(li => {
     if(li.filterID === $event.filterID) {
        li.list.map(gi => {
       if (gi.value === $event.value) {
            gi.flag = $event.flag
       }
      })
     }
   });
  this.onChangeFilter.emit(this.filterList);
  }
}

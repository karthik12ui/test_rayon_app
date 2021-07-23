import { filter } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { lazyLoaderConst } from 'src/@rayonsoft-shared/components/lazy-loader/lazy-loader.constant';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { SearchProfileConstant } from '../career.constant';
import { FilterValueFlag, JobDetails, JobsListModel, SearchDetailsModel, SearchJobsDisplayFlag, SectionList } from '../careers.model';
import { CareersService } from '../careers.service';
import { forkJoin, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-career-home',
  templateUrl: './career-home.component.html',
  styleUrls: ['./career-home.component.scss']
})
export class CareerHomeComponent implements OnInit {
  LazyLoaderConst: any;
  pageContent: any;
  watcher: Subscription;
  listOfJobs = new Array<JobsListModel>();
  updatedListWithFilters = new Array<JobsListModel>();
  listWithCountyType = new Array<JobsListModel>();
  searchDisplayFlag = new SearchJobsDisplayFlag();
  searchTypeSelected = new SearchDetailsModel();
  filtersList = SearchProfileConstant.ReturedFiltersList;
  constructor(public rayonsoftCareerService: CareersService, 
    public layoutSharedService :LayoutSharedService,
    public store: Store) { 
      this.LazyLoaderConst = lazyLoaderConst;
      this.pageContent = this.rayonsoftCareerService.pageContent.careersHome;
      const filterSearchType = SearchProfileConstant.searchList.filter(li => li.selected === true);
      this.searchTypeSelected.searchType = filterSearchType[0].type;
      this.searchTypeSelected.searchInput = '';
      this.getJobsList();
    }
  ngOnInit() {
  }
  // ========================================================================================
  //getJobsList API
  // ========================================================================================
  getJobsList() {
    this.searchDisplayFlag.searchResultsPlaceholder = true;
    this.rayonsoftCareerService.getJobList()
    .subscribe(res => {
      this.getJobsListSuccess(res);
    },
      err => {
        this.getJobsListError(err);
      });
  }
  getJobsListError(error) {

  }
  getJobsListSuccess(success) {
  
    if (!!success && !!success.serviceStatus && !!success.serviceStatus.statusCode
      && success.serviceStatus.statusCode === '0000') {
     if (!!success.data && !!success.data.jobsList && success.data.jobsList !== null) {
       const jobsData = success.data.jobsList
       this.constructModelObject(jobsData);
     }
   }
  }
// ========================================================================================
  // construct Model
  // ========================================================================================
  constructModelObject(data) {
      this.listOfJobs = new Array <JobsListModel>();
      if(data.length > 0) {
        data.forEach((li, index) => {
          const ListOfJobs = new JobsListModel();
          ListOfJobs.id = index;
          ListOfJobs.image = li.image ? li.image : 'assets/images/marketplace/careers/career-3.PNG';
          ListOfJobs.postionID = li.postionID ? li.postionID : null;
          ListOfJobs.postedOn = li.postedOn ? li.postedOn : null;
          ListOfJobs.title = li.title ? li.title : null;
          ListOfJobs.category = li.category ? li.category : null;
          ListOfJobs.jobType = li.jobType ? li.jobType : null;
          ListOfJobs.state = li.state ? li.state : null;
          ListOfJobs.city = li.city ? li.city : null;
          ListOfJobs.country = li.country ? li.country : null;
          ListOfJobs.jobDetails = this.rayonsoftCareerService.getJobDetailsModel(li.jobDetails);
          this.listOfJobs.push(ListOfJobs);
        });
      }
    this.filtersResultsBySearchType(this.listOfJobs);
  }

  // ========================================================================================
  // Filter based on Search Type and Input Title
  // ========================================================================================
  filtersResultsBySearchType(data) {
    this.listWithCountyType = data.filter(li => li.country === this.searchTypeSelected.searchType);
    this.getSideNavFilterList(this.listWithCountyType);
    this.searchDisplayFlag.searchResultsPlaceholder = false;
  }

  searchEmitted($event) {
    if (!!$event && $event !== null) {
      if($event.searchType !== this.searchTypeSelected.searchType) {
        this.searchTypeSelected.searchType = $event.searchType;
        this.filtersResultsBySearchType(this.listOfJobs);
      } 
      this.appendSearchInputString($event.searchInput);
  }
  }

  appendSearchInputString(searchInput) {
    if(searchInput !== undefined && searchInput !== null) {
      let filterValue = searchInput;
      filterValue = filterValue.trim().toLowerCase();
      this.searchTypeSelected.searchInput = filterValue;
    }
  }
  // ===========================================================================
// Filter Section from UI
// ==========================================================================
changeFilter($event) {
  const filteredItems = $event;
  const selectedFromFilters = [];
  let getSelectedItemList = [];
  filteredItems.map(li => {
    li.list.map(item => {
      if (item.flag) {
        selectedFromFilters.push(item.value);
      }
    });
  })
  selectedFromFilters.forEach(x => {
    const selectedItem = this.listOfJobs.filter(item => (item.jobType === x
      || item.category === x
      || item.state === x
      || item.city === x))
      getSelectedItemList.push(selectedItem[0]);
   })
   if(getSelectedItemList.length > 0) {
   this.listWithCountyType = this.layoutSharedService.removeDuplicatesFromArray(getSelectedItemList);
   } else {
    this.filtersResultsBySearchType(this.listOfJobs);
   }
}

  // ========================================================================================
  // Filters List Generate Based on Defult Search Type which will be sent in Const
  // ========================================================================================
  getSideNavFilterList(listOfJobs) {
    this.filtersList.forEach(li => {
      li.list = [];
      listOfJobs.map(gi => {
        const filterValueFlag = new FilterValueFlag();
        if (!!gi.jobType && li.filterID === 'jobType') {
          filterValueFlag.flag = false;
          filterValueFlag.value = gi.jobType;
          const insertjobTypeValue = this.flagToDetectDuplicates(li.list, filterValueFlag.value);
          if (insertjobTypeValue) {
            li.list.push(filterValueFlag);
          }
        }
        if (!!gi.category && li.filterID === 'category') {
          filterValueFlag.flag = false;
          filterValueFlag.value = gi.category;
          const insertcategoryTypeValue = this.flagToDetectDuplicates(li.list, filterValueFlag.value);
          if (insertcategoryTypeValue) {
            li.list.push(filterValueFlag);
          }
        }
        if (!!gi && gi.state && li.filterID === 'state') {
          filterValueFlag.flag = false;
          filterValueFlag.value = gi.state;
          const insertstateValue = this.flagToDetectDuplicates(li.list, filterValueFlag.value);
          if (insertstateValue) {
            li.list.push(filterValueFlag);
          }
        }
        if (!!gi && gi.city && li.filterID === 'city') {
          filterValueFlag.flag = false;
          filterValueFlag.value = gi.city;
          const insertcityValue = this.flagToDetectDuplicates(li.list, filterValueFlag.value);
          if (insertcityValue) {
            li.list.push(filterValueFlag);
          }
        }
      });
    });
  }
  flagToDetectDuplicates(list, compareWith) {
    let flag: boolean;
    const getfilter =  list.filter(di => di.value === compareWith);
    if (getfilter.length === 0) {
      flag = true;
    } else {
      flag = false;
    }
    return flag;
  }
}

import { filter } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { JobsListModel, SearchJobsDisplayFlag } from '../careers.model';
import { CareersService } from '../careers.service';
import { lazyLoaderConst } from 'src/@rayonsoft-shared/components/lazy-loader/lazy-loader.constant';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss']
})
export class CareerDetailsComponent implements OnInit {
  pageContent: any;
  private sub: any;
  jobDetails: any;
  LazyLoaderConst:any;
  searchDisplayFlag = new SearchJobsDisplayFlag();
  constructor(public rayonsoftCareerService: CareersService, 
    private activatedRoute: ActivatedRoute, 
    public layoutSharedService :LayoutSharedService) { 
      this.LazyLoaderConst = lazyLoaderConst;
      this.pageContent = this.rayonsoftCareerService.pageContent.careerDetail;
    }
   
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {   
      console.log(params, 'params');
      this.getJobsById(params['id']); 
    });
  }
  
  // ========================================================================================
  //getJobsList API
  // ========================================================================================
  getJobsById(id) {
    this.searchDisplayFlag.searchResultsPlaceholder = true;
    this.rayonsoftCareerService.getJobList()
    .subscribe(res => {
      this.getJobsByIdSuccess(res, id);
    },
      err => {
        this.getJobsByIdError(err);
      });
  }
  getJobsByIdError(error) {
    this.searchDisplayFlag.searchResultsPlaceholder = true;
  }
  getJobsByIdSuccess(success, id) {
  
    if (!!success && !!success.serviceStatus && !!success.serviceStatus.statusCode
      && success.serviceStatus.statusCode === '0000') {
     if (!!success.data && !!success.data.jobsList && success.data.jobsList !== null) {
       const filter = success.data.jobsList.filter(li => li.postionID === id)
       if(filter.length > 0) {
        this.constructModelObject(filter[0]);
       }
     }
   }
  }

  constructModelObject(job) {
    this.jobDetails = new JobsListModel();
    this.jobDetails.image = job.image ? job.image : 'assets/images/marketplace/careers/career-3.PNG';
    this.jobDetails.postionID = job.postionID ? job.postionID : null;
    this.jobDetails.postedOn = job.postedOn ? job.postedOn : null;
    this.jobDetails.title = job.title ? job.title : null;
    this.jobDetails.category = job.category ? job.category : null;
    this.jobDetails.jobType = job.jobType ? job.jobType : null;
    this.jobDetails.state = job.state ? job.state : null;
    this.jobDetails.city = job.city ? job.city : null;
    this.jobDetails.country = job.country ? job.country : null;
    this.jobDetails.jobDetails = this.rayonsoftCareerService.getJobDetailsModel(job.jobDetails);
    this.searchDisplayFlag.searchResultsPlaceholder = false;
  }
}

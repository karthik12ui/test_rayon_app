import {Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { AppService } from 'src/app/app.service';
import { JobDetails, SectionList } from './careers.model';

@Injectable()
export class CareersService implements Resolve<any> {
    pageContent: any;
    constructor(
      public httpClient: HttpClient,
      public appServices: AppService
    ) {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ reslove methods
    // -----------------------------------------------------------------------------------------------------
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise<void>((reslove) => {
            Promise.all([
                this.getPageContentData(),
            ]). then(
                () => {
                    reslove();
                },
                reject
            );
        });
    }

    getPageContentData(): Promise<any> {
        return new Promise((resolve) => {
            this.httpClient.get('api/careers')
                .subscribe((response: any) => {
                    this.pageContent = response;
                    resolve(response);
                }, reject);
        });
    }

    getJobList(): Observable<any> {
        // return this.httpClient.post(this.appServices.appEndPoints().secureOCSearchProfile,
        // JSON.stringify(data),
        // this.sharedCommonService.httpOptions);
        return this.httpClient.get(this.appServices.appEndPoint().getJobsdata);
   }
   getJobDetailsModel(data) {
    const details = new JobDetails();
    details.description = data.description ? data.description : null;
    details.basicQualification = this.getDetailsListModel(data.basicQualification);
    details.PreferredSkills = this.getDetailsListModel(data.PreferredSkills);
    return details;
  }
  getDetailsListModel(data) {
    const details = new Array<SectionList>();
    if(!!data && data != null && data.length > 0) {
      data.forEach(li => { 
          const sectionList = new SectionList()
          sectionList.list = li.list ? li.list : null;
          details.push(sectionList);
       });
    }
    return details;
  }
}

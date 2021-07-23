import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { AppService } from 'src/app/app.service';

@Injectable()
export class AccountSetupService {
    pageContent: any;
    constructor(
      public httpClient: HttpClient,
      public layoutSharedService: LayoutSharedService,
      public appService: AppService
    ) {

    }

    postLoginDetails(data): Observable<any> {
        return this.httpClient.get(this.appService.appEndPoint().getTestdata,
        this.layoutSharedService.httpOptions);
      //   return this.httpClient.post(this.appService.appEndPoint().loginAPI,
      //   JSON.stringify(data),
      //  this.layoutSharedService.httpOptions);
    }
    testAPI(): Observable<any> {
      return this.httpClient.post(this.appService.appEndPoint().testAPI,
     this.layoutSharedService.httpOptions);
  }
}

import {Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Injectable()
export class SolutionsService implements Resolve<any> {
    pageContent: any;
    constructor(
      public httpClient: HttpClient,
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
            this.httpClient.get('api/solutions')
                .subscribe((response: any) => {
                    this.pageContent = response;
                    resolve(response);
                }, reject);
        });
    }
}

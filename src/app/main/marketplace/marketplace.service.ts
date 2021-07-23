import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router, Resolve, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reject } from 'q';
import { promise } from 'protractor';

@Injectable()
export class MarketplaceService implements Resolve<any> {
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
            this.httpClient.get('api/marketplace')
                .subscribe((response: any) => {
                    this.pageContent = response;
                    resolve(response);
                }, reject);
        });
    }
}

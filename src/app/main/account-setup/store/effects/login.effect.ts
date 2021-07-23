import { Logged_In_User_Interface } from './../../../../layout-shared/types/logged_user.interface';
import {Injectable} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap, tap} from 'rxjs/operators'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'
import {Observable, of} from 'rxjs'
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action'
import { AccountSetupService } from '../../account-setup.service';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { Store } from '@ngrx/store';
import { AuthStateInterface } from '../../account-setup.model';

@Injectable()
export class LoginEffect {
  state: AuthStateInterface;
  constructor(
    private actions: Actions,
    private accountSetupService: AccountSetupService,
    private store: Store,
    public layoutSharedService: LayoutSharedService
   
  ) {}


  login = createEffect(() =>
  this.actions.pipe(
    ofType(loginAction),
    switchMap(({request}) => {
      return this.accountSetupService.postLoginDetails(request).pipe(
        map((currentUser: Logged_In_User_Interface) => {
          return loginSuccessAction({currentUser})
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(loginFailureAction({errors: errorResponse.error.errors}))
        })
      )
    })
  )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(loginSuccessAction),
        tap(() => {
              this.layoutSharedService.navigateInApp('/marketplace/industries/education')
        })
      ),
    {dispatch: false}
  )

}

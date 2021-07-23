import { loginAction } from './../store/actions/login.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AccountSetupValidation } from './login.validation';
import { AccountLoginModel, AccountLoginRequestInterface } from '../account-setup.model';
import { AccountSetupService } from '../account-setup.service';
import { APIResCodes, ErrorPageTypes } from 'src/app/layout-shared/services/error-message.constant';
import { NotificationsModel } from 'src/app/layout-shared/notification-alerts/notification-alert.model';
import { ErrorMessageService } from 'src/app/layout-shared/services/error-message.service';
import { LayoutSharedService } from 'src/app/layout-shared/services/layout-shared.service';
import { GlobalAuthService } from 'src/@rayonsoft-shared/services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginValidationMessages: any;
  displayNotificationAlert: boolean;
  alerts  = new Array<NotificationsModel>();
  public hide = true;

  loginDetailsModel = {} as AccountLoginModel;
  constructor(public formBuilder: FormBuilder,
    public validationItems: AccountSetupValidation,
    public layoutSharedService: LayoutSharedService,
    public errorMessageService: ErrorMessageService,
    public accountService: AccountSetupService,
    public store: Store,
    public globalAuthService: GlobalAuthService) {
      this.alerts = new Array<NotificationsModel>();
      this.displayNotificationAlert = false
      this.loginFormGroupValidation();
      this.setAlerts('PF001', true);
     }

  ngOnInit() {

  }

  loginFormGroupValidation() {
    this.loginValidationMessages = this.validationItems.getLoginValidation();
    this.loginForm = this.formBuilder.group({
     userName: new FormControl(this.loginDetailsModel.userName, Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100),
      Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
     ])),
     password: new FormControl(this.loginDetailsModel.password, Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(80),
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
     ]))
    });
  }

  submitLoginClick() {
    this.validateLoginForm()
  }

  validateLoginForm() {
    if(!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      for(const control in this.loginForm.controls) {
        if(this.loginForm.controls.hasOwnProperty(control)) {
          this.loginForm.controls[control].markAsTouched();
          this.loginForm.controls[control].markAsDirty();
        }
      }
    } else {
      this.postLoginDetailsToAPI();
    }
  }


// *****************************************************************//
        // Login API
// *****************************************************************//
  postLoginDetailsToAPI() {
    const data = {
      userName: this.layoutSharedService.hashWithSaltData(this.loginDetailsModel.userName),
      password: this.layoutSharedService.hashWithSaltData(this.loginDetailsModel.password)
    }

    const request: AccountLoginRequestInterface = {
      user: data
    }
    this.store.dispatch(loginAction({request}))
    // this.accountService.postLoginDetails(data)
    // .subscribe(res => {
    //   this.postLoginDetailsSuccess(res);
    // },
    // err => {
    //   this.postLoginDetailsError(err);
    // })
  }

  // postLoginDetailsSuccess(success) {
  //   if(!!success.messageCode && !!success.messageCode &&
  //     success.messageCode === APIResCodes.success ) {
  //       if(!!success.token && success.token !== null && success.token !== '') {
  //         this.globalAuthService.setToken(success.token);
  //         this.testAPI();
  //         // this.layoutSharedService.navigateInApp(pa)
  //         console.log(success, 'res');
  //       }
  //   }
  // }


  // postLoginDetailsError(error) {

  // }


// *****************************************************************//
        // Test API
// *****************************************************************//
  testAPI() {
    this.accountService.testAPI()
    .subscribe(res => {
     console.log(res, 'postLoginDetails')
    },
    err => {
      console.log(err, 'postLoginDetails')
    })
  }


  alertClose(value) {
    const listOfAlerts = this.alerts;
    this.alerts = listOfAlerts.filter(li => li.Id !== value);
  }

  setAlerts(code, flag) {
    const data = {
      Message: {
        code
      }
    };
    const error = this.errorMessageService.onSuccessVerifyErrorMessages(data, null, ErrorPageTypes.constMessage)
    if(error.length > 0) {
      this.displayAlert(error[0], flag);
    }
  }

  displayAlert(errors, flag) {
    if(!this.errorMessageService.navigateToErrorPage) {
      if(!flag) {
        this.displayNotification(errors);
      } else {
        this.alerts = [];
        this.displayNotification(errors);
      }
    }
  }

  displayNotification(alert) {
      const alertsBind = new NotificationsModel();
      alertsBind.Id = alert.Id;
      alertsBind.Message = alert.Message;
      alertsBind.NotifyBackgroundColor = alert.NotifyBackgroundColor;
      alertsBind.NotifyParam = alert.NotifyParam;
      alertsBind.NotifyType = alert.NotifyType;
      this.alerts.push(alertsBind);
      this.displayNotificationAlert = true;
      window.scroll(0,0);
  }
}

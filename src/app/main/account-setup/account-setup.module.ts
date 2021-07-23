import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSetupComponent } from './account-setup.component';
import { LoginComponent } from './login/login.component';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountSetupValidation } from './login/login.validation';
import { AccountSetupService } from './account-setup.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { LoginEffect } from './store/effects/login.effect';
export const routes = [
  {
    path: '',
    component: AccountSetupComponent,
    children: [
        {
          path: '', redirectTo: 'login', pathMatch: 'full'
        },
        {
                path: 'login',
                component: LoginComponent,
                data: {breadcrumb: 'Login'},
        },
    ],
  }
];
@NgModule({
  declarations: [AccountSetupComponent,
    LoginComponent],
  imports: [
    CommonModule,
    RayonsoftSharedModule,
    LayoutSharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect]),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  exports: [RouterModule],
  providers: [AccountSetupValidation, AccountSetupService]
})
export class AccountSetupModule { }

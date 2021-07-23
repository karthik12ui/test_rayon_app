import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { SolutionsService } from './solutions.service';
import { SolutionsComponent } from './solutions.component';
import { EBusinessSolutionsComponent } from './e-business-solutions/e-business-solutions.component';
import { EnterpriseApplicationIntegrationComponent } from './enterprise-application-integration/enterprise-application-integration.component';
import { EnterpriseSoaSolutionComponent } from './enterprise-soa-solution/enterprise-soa-solution.component';
import { MobileAppsDevelopmentComponent } from './mobile-apps-development/mobile-apps-development.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { ReactiveFormsModule } from '@angular/forms';


export const routes = [
    {
      path: '',
      component: SolutionsComponent,
      children:[
        {
          path: '', redirectTo: 'e-business-solution', pathMatch: 'full'
        },
          {
          path: 'e-business-solution',  // 1
          component: EBusinessSolutionsComponent,
          data: {breadcrumb: 'e-Business Solution'},
          },
          {
                path: 'enterprise-application-integration', // 2
                component: EnterpriseApplicationIntegrationComponent,
                data: {breadcrumb: 'Enterprise Application Integration'},
          },
          {
                path: 'enterprise-soa-solution', // 3
                component: EnterpriseSoaSolutionComponent,
                data: {breadcrumb: 'Enterprise SOA Solution'},
          },
          {
                path: 'mobile-apps-development', // 4
                component: MobileAppsDevelopmentComponent,
                data: {breadcrumb: 'Mobile Apps Devlopment'},
          },
          {
                path: 'web-development', // 5
                component: WebDevelopmentComponent,
                data: {breadcrumb: 'Web Devlopment'},
          },
      ],
      resolve:{
        data: SolutionsService
      }
    },
  ];

@NgModule({
   declarations: [SolutionsComponent,
            EBusinessSolutionsComponent,
            EnterpriseApplicationIntegrationComponent,
            EnterpriseSoaSolutionComponent,
            MobileAppsDevelopmentComponent,
            WebDevelopmentComponent],
    imports: [
      CommonModule,
      RayonsoftSharedModule,
      LayoutSharedModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ],
    exports: [RouterModule],
      providers: [
          SolutionsService
      ]
  })
  export class SolutionsModule { }
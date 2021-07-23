import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { CareersComponent } from './careers.component';
import { CareersService } from './careers.service';
import { CareerDetailsComponent } from './career-details/career-details.component';
import { CareerHomeComponent } from './career-home/career-home.component';

import { JobsListComponent } from './career-home/jobs-list/jobs-list.component';
import { SearchJobsComponent } from './career-home/search-jobs/search-jobs.component';
import { SearchJobsValidation } from './career.validation';
import { FilterJobsComponent } from './career-home/filter-jobs/filter-jobs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterListComponent } from './career-home/filter-list/filter-list.component';
import { AccordionContentComponent } from './career-details/accordion-content/accordion-content.component';
import { InfoContentComponent } from './career-details/info-content/info-content.component';

export const routes = [
    {
      path: '',
      component: CareersComponent,
      children: [
        {
          path: '', redirectTo: 'home', pathMatch: 'full'
        },
          {
                path: 'home',  // 1
                component: CareerHomeComponent,
                data: {breadcrumb: 'Search'},
          },
          {
                path: 'details/:id', // 2
                component: CareerDetailsComponent,
                data: {breadcrumb: 'Job details'},
          },
      ],
      resolve:{
        data: CareersService
      }
    }
  ];


@NgModule({
    declarations: [CareersComponent,
      CareerDetailsComponent,
      CareerHomeComponent,
      FilterJobsComponent,
      JobsListComponent,
      FilterListComponent,
      SearchJobsComponent,
      AccordionContentComponent,
      InfoContentComponent
    ],
      providers: [
        CareersService,
        SearchJobsValidation
      ],
      imports: [
        CommonModule,
        RayonsoftSharedModule,
        LayoutSharedModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
      ],
      exports: [RouterModule],
  })
  export class CareersModule { }
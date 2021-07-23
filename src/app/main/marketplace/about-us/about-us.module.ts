import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RayonsoftComponent } from './rayonsoft/rayonsoft.component';
import { AboutUsService } from './about-us.service';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { RouterModule } from '@angular/router';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { HowWeWorkComponent } from './how-we-work/how-we-work.component';
import { AddressListComponent } from './contact-us/address-list/address-list.component';
export const routes = [
    {
      path: '',
      component: AboutUsComponent,
      children: [
        {
            path: 'about-rayonsoft',
            component: RayonsoftComponent,
            data: {breadcrumb: 'About Rayonsoft'},
        },
        {
          path: 'how-we-work',
          component: HowWeWorkComponent,
          data: {breadcrumb: 'How we work with clients'},
      },
        {
            path: 'contact-us',
            component: ContactUsComponent,
            data: {breadcrumb: 'Contact us'},
      },
      {
        path: '', redirectTo: 'about-rayonsoft', pathMatch: 'full'
      },
      ],
      resolve:{
        data: AboutUsService
      }
    },
  ];

@NgModule({
  declarations: [AboutUsComponent,
    ContactUsComponent,
    HowWeWorkComponent,
    RayonsoftComponent,
    AddressListComponent],
    imports: [
        CommonModule,
        RayonsoftSharedModule,
        LayoutSharedModule,
        RouterModule.forChild(routes),
      ],
    exports: [RouterModule],
      providers: [
        AboutUsService
    ]
})
export class AboutUsModule { }

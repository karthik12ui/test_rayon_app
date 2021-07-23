import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketplaceComponent } from './marketplace.component';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { IndustriesComponent } from './industries/industries.component';
import { RayonsoftServicesComponent } from './rayonsoft-services/rayonsoft-services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AboutUsModule } from './about-us/about-us.module';
import { CareersModule } from './careers/careers.module';
import { HomeModule } from './home/home.module';
import { IndustriesModule } from './industries/industries.module';
import { RayonsoftServicesModule } from './rayonsoft-services/rayonsoft-services.module';
import { SolutionsModule } from './solutions/solutions.module';
import { MarketplaceService } from './marketplace.service';
import { ReactiveFormsModule } from '@angular/forms';

export const routes = [
  {
    path: '',
    component: MarketplaceComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        },
        {
            path: 'about-us',
            loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
        },
        {
            path: 'careers',
            loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule)
        },
        {
            path: 'industries',
            loadChildren: () => import('./industries/industries.module').then(m => m.IndustriesModule),
        },
        {
            path: 'services',
            loadChildren: () => import('./rayonsoft-services/rayonsoft-services.module').then(m => m.RayonsoftServicesModule),
        },
        {
            path: 'solutions',
            loadChildren: () => import('./solutions/solutions.module').then(m => m.SolutionsModule),
        },
    ],
  }
];

@NgModule({
  declarations: [MarketplaceComponent],
  imports: [
      CommonModule,
      RayonsoftSharedModule,
      LayoutSharedModule,
      RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [MarketplaceService]
})
export class MarketplaceModule { }

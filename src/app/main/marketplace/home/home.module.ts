import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { CarouselComponent } from './carousel/carousel.component';

export const routes = [
    {
      path: '',
      component: HomeComponent,
      resolve:{
        data: HomeService
      }
    }
  ];


@NgModule({
    declarations: [HomeComponent,
      CarouselComponent],
      providers: [
        HomeService
      ],
      imports: [
        CommonModule,
        RayonsoftSharedModule,
        LayoutSharedModule,
        RouterModule.forChild(routes),
      ],
      exports: [RouterModule],
  })
  export class HomeModule { }
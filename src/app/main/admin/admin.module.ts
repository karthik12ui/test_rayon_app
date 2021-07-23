import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


export const routes = [
  {
    path: '',
    component: AdminComponent,
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
      CommonModule,
      RayonsoftSharedModule,
      LayoutSharedModule,
      RouterModule.forChild(routes),
  ],
})
export class AdminModule { }

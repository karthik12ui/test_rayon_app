import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { HrComponent } from './hr.component';


export const routes = [
  {
    path: '',
    component: HrComponent,
  }
];

@NgModule({
  declarations: [HrComponent],
  imports: [
      CommonModule,
      RayonsoftSharedModule,
      LayoutSharedModule,
      RouterModule.forChild(routes),
  ]
})
export class HrModule { }

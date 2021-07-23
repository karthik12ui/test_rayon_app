import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustriesComponent } from './industries.component';
import { BankingComponent } from './banking/banking.component';
import { CapitalMarketsComponent } from './capital-markets/capital-markets.component';
import { CommunicationMediaTechComponent } from './communication-media-tech/communication-media-tech.component';
import { ConsumerGoodsComponent } from './consumer-goods/consumer-goods.component';
import { EducationComponent } from './education/education.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { InformationServicesComponent } from './information-services/information-services.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LifeScienceComponent } from './life-science/life-science.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { OilGasComponent } from './oil-gas/oil-gas.component';
import { RetailComponent } from './retail/retail.component';
import { TravelHospitalityComponent } from './travel-hospitality/travel-hospitality.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { IndustriesService } from './industries.service';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { IndustriesHomeComponent } from './industries-home/industries-home.component';
import { ReactiveFormsModule } from '@angular/forms';


export const routes = [
  {
    path: '',
    component: IndustriesComponent,
    children: [
      {
        path: '', redirectTo: 'banking', pathMatch: 'full'
      },
        {
              path: 'banking',  // 1
              component: BankingComponent,
              data: {breadcrumb: 'Banking'},
        },
        {
              path: 'captital-market', // 2
              component: CapitalMarketsComponent,
              data: {breadcrumb: 'Capital Market'},
        },
        {
              path: 'communication-media', // 3
              component: CommunicationMediaTechComponent,
              data: {breadcrumb: 'Communication & Media Technologies'},
        },
        {
              path: 'consumer-goods', // 4
              component: ConsumerGoodsComponent,
              data: {breadcrumb: 'Consumer Goods'},
          },
          {
              path: 'education', // 5
              component: EducationComponent,
              data: {breadcrumb: 'Education'},
          },
          {
              path: 'healthcare', // 6
              component: HealthcareComponent,
              data: {breadcrumb: 'Healthcare'},
          },
          {
              path: 'information-services', // 7
              component: InformationServicesComponent,
              data: {breadcrumb: 'Information Services'},
          },
          {
              path: 'insurance', // 8
              component: InsuranceComponent,
              data: {breadcrumb: 'Insurance'},
          },
          {
              path: 'life-science', // 9
              component: LifeScienceComponent,
              data: {breadcrumb: 'Life science'},
          },
          {
              path: 'logistics', // 10
              component: LogisticsComponent,
              data: {breadcrumb: 'Logistics'},
          },
          {
              path: 'manufacturing', // 11
              component: ManufacturingComponent,
              data: {breadcrumb: 'Manufacturing'},
          },
          {
              path: 'oil-gas', // 12
              component: OilGasComponent,
              data: {breadcrumb: 'Oil & Gas'},
          },
          {
              path: 'retail', // 13
              component: RetailComponent,
              data: {breadcrumb: 'Retail'},
          },
          {
            path: 'travel-hospitality', // 14
            component: TravelHospitalityComponent,
            data: {breadcrumb: 'Travel hospitality'},
          },
          {
            path: 'utilities', // 15
            component: UtilitiesComponent,
            data: {breadcrumb: 'Utilities'},
          }
    ],
    resolve:{
      data: IndustriesService
    }
  }
];

@NgModule({
  declarations: [
    IndustriesComponent,
    IndustriesHomeComponent,
    BankingComponent,
    CapitalMarketsComponent,
    CommunicationMediaTechComponent,
    ConsumerGoodsComponent,
    EducationComponent,
    HealthcareComponent,
    InformationServicesComponent,
    InsuranceComponent,
    LifeScienceComponent,
    LogisticsComponent,
    ManufacturingComponent,
    OilGasComponent,
    RetailComponent,
    TravelHospitalityComponent,
    UtilitiesComponent],
  imports: [
    CommonModule,
    RayonsoftSharedModule,
    LayoutSharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
  ],
    exports: [RouterModule],
    providers: [
      IndustriesService
  ]
})
export class IndustriesModule { }

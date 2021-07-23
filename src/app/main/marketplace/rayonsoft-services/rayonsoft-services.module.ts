import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { LayoutSharedModule } from 'src/app/layout-shared/layout-shared.module';
import { RouterModule } from '@angular/router';
import { RayonsoftServicesComponent } from './rayonsoft-services.component';
import { ArtificalIntelligenceComponent } from './artifical-intelligence/artifical-intelligence.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { CloudComponent } from './cloud/cloud.component';
import { EnterpriseServicesComponent } from './enterprise-services/enterprise-services.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { SecurityServiceComponent } from './security-service/security-service.component';
import { StrategyConsultingComponent } from './strategy-consulting/strategy-consulting.component';
import { TalentHumanPotentialComponent } from './talent-human-potential/talent-human-potential.component';
import { RayonsoftServicesService } from './rayonsoft-services.service';
import { MicrosoftComponent } from './microsoft/microsoft.component';
import { CustomerInsightComponent } from './customer-insight/customer-insight.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes = [
    {
      path: '',
      component: RayonsoftServicesComponent,
      children: [
        {
                path: '', redirectTo: 'strategy-consulting', pathMatch: 'full'
              },
        {
                path: 'strategy-consulting', // 9
                component: StrategyConsultingComponent,
                data: {breadcrumb: 'Strategy Consulting'},
        },
        {
                path: 'talent-human-potential', // 10
                component: TalentHumanPotentialComponent,
                data: {breadcrumb: 'Talent & Human Potential'},
        },
        {
                path: 'customer-insight', // 10
                component: CustomerInsightComponent,
                data: {breadcrumb: 'Customer Insight'},
        },
            {
                    path: 'artifical-intelligence',  // 1
                    component: ArtificalIntelligenceComponent,
                    data: {breadcrumb: 'Artifical Intelligence'},
            },
            {
                    path: 'blockchain', // 2
                    component: BlockchainComponent,
                    data: {breadcrumb: 'Blockchain'},
            },
            {
                    path: 'cloud', // 3
                    component: CloudComponent,
                    data: {breadcrumb: 'Cloud'},
            },
            {
                path: 'microsoft', // 14
                component: MicrosoftComponent,
                data: {breadcrumb: 'Microsoft'},
            },
            {
                path: 'security-service', // 8
                component: SecurityServiceComponent,
                data: {breadcrumb: 'Security service'},
                },
            {
                path: 'quality-assurance', // 6
                component: QualityAssuranceComponent,
                data: {breadcrumb: 'Quality assurance'},
            },
            {
                path: 'enterprise-services', // 4
                component: EnterpriseServicesComponent,
                data: {breadcrumb: 'Enterprise services'},
        },
      ],
      resolve:{

        data: RayonsoftServicesService
      }
    }
  ];

@NgModule({
    declarations: [
      RayonsoftServicesComponent,
    ArtificalIntelligenceComponent,
    BlockchainComponent,
    CloudComponent,
    EnterpriseServicesComponent,
    QualityAssuranceComponent,
    SecurityServiceComponent,
    StrategyConsultingComponent,
    TalentHumanPotentialComponent,
        MicrosoftComponent,
        CustomerInsightComponent,],
      providers: [
        RayonsoftServicesService
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
  export class RayonsoftServicesModule { }
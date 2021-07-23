
import { MainComponent } from './main/main.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent, children: [
            {
                path: '',
                loadChildren: () => import('./main/initialize/initialize.module').then(m => m.InitializeModule)
            },
            {
                path: 'account',
                loadChildren: () => import('./main/account-setup/account-setup.module').then(m => m.AccountSetupModule),
            },
            {
                path: 'marketplace',
                loadChildren: () => import('./main/marketplace/marketplace.module').then(m => m.MarketplaceModule)
            },
            {
                path: 'admin',
                loadChildren: () => import('./main/admin/admin.module').then(m => m.AdminModule),
                data: {breadcrumb: 'HR'}
            },
            {
                path: 'hr',
                loadChildren: () => import('./main/hr/hr.module').then(m => m.HrModule),
                data: {breadcrumb: 'HR'}
            },
            {
                path: 'employee',
                loadChildren: () => import('./main/employee/employee.module').then(m => m.EmployeeModule),
                data: {breadcrumb: 'Employee'}
            },
            {
                path: 'shared',
                loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
            }
        ]
    },
    { path: '**', redirectTo: 'shared/page-not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
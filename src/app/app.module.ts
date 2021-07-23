import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { LayoutSharedModule } from './layout-shared/layout-shared.module';

import { AppRoutingModule } from './app.routing';
import { LocalDbService } from './content-db/local-db.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RayonsoftSharedModule } from 'src/@rayonsoft-shared/@rayonsoft-shared.module';
import { AppHttpInterceptor } from 'src/@rayonsoft-shared/services/app-interceptor.service';
import { MarketplaceModule } from './main/marketplace/marketplace.module';
import { AppService } from './app.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
const config: InputFileConfig = {
   fileAccept: '*'
 };


@NgModule({
   declarations: [
      AppComponent,
      MainComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      InMemoryWebApiModule.forRoot(LocalDbService, {
         delay             : 0,
         passThruUnknownUrl: true
     }),
     NgProgressModule,
     NgProgressHttpModule,
     FormsModule,
     InputFileModule.forRoot(config),
     RayonsoftSharedModule,
     LayoutSharedModule,
     AppRoutingModule,
     StoreModule.forRoot({}),
     StoreDevtoolsModule.instrument({
       maxAge: 25,
       logOnly: environment.production
     }),
     EffectsModule.forRoot([])
   ],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: AppHttpInterceptor,
         multi: true
      },
      {
         provide: LocationStrategy,
         useClass: HashLocationStrategy,
      },
      AppService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

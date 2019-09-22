import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AuthService } from './auth.service';
// import { UserModule } from '../components/user-profile/user.module';
import { SurveyService } from './survey.service';

import { TComponent } from '../components/t/t.component';


@NgModule({
  declarations: [TComponent],
  imports: [
    CommonModule
  ],
  exports:[CommonModule,HttpClientModule,TComponent]
})
export class SheredModule {
  static forRoot(): ModuleWithProviders{
    return{
      ngModule:SheredModule,
      providers:[
        {provide:AuthService }, {provide:SurveyService }
      ]
    }
  }
 }

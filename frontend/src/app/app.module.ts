import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavComponent } from './components/nav/nav.component';
import {FormsModule} from '@angular/forms';
import { StartLayoutComponent } from './components/start-layout/start-layout.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyService } from './shared/survey.service';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OneSurveyComponent } from './components/one-survey/one-survey.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './shared/auth.guard';
import {AuthInterceptor} from './shared/auth.interceptor';
import { TComponent } from './components/t/t.component';
// import { MySurveyComponent } from './components/user/user-profile/my-survey/my-survey.component
// import { Router } from '@angular/router';
// import { routing, appRoutingProviders } from './app.routes';
// import { NgModule } from '@angular/core';
import {SheredModule} from './shared/shered.module';
import { SurveyCreatComponent } from './components/user/survey-creat/survey-creat.component';
import { UserComponent } from './components/user/user.component';
import { FormCreatComponent } from './components/user/form-creat/form-creat.component';
import { ListCreatComponent } from './components/user/list-creat/list-creat.component';
import { NewListFormComponent } from './components/user/list-creat/new-list-form/new-list-form.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StartLayoutComponent,
    SingInComponent,
    OneSurveyComponent,
    SingUpComponent,
    UserProfileComponent,
    // TComponent,
    // MySurveyComponent,
    SurveyCreatComponent,
    UserComponent,
    FormCreatComponent,
    ListCreatComponent,
    NewListFormComponent


  ],
  imports: [
    BrowserModule,
    // SheredModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Router,


  ],
  providers: [{provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
              multi: true},
    SurveyService, AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

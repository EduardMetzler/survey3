import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartLayoutComponent } from './components/start-layout/start-layout.component';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { OneSurveyComponent } from './components/one-survey/one-survey.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth.guard';



import { TComponent } from './components/t/t.component'
import { SurveyCreatComponent } from './components/user/survey-creat/survey-creat.component';
import { UserComponent } from './components/user/user.component';
import { FormCreatComponent } from './components/user/form-creat/form-creat.component';
import { ListCreatComponent } from './components/user/list-creat/list-creat.component';

const routes: Routes = [
  { path: '',redirectTo: '/start',pathMatch: 'full'},
  // {path: 't', component: TComponent},
  {path: 'start', component: StartLayoutComponent},
//   children:[{path:'', component:StartLayoutComponent},
//   {path: ':oneSurvey._id', component: OneSurveyComponent},
// ]},


  {path: 'singIn', component: SingInComponent},
  {path: 'singUp', component: SingUpComponent},



  // {path: ':id', loadChildren:}

  {path: ':oneSurvey._id', component: OneSurveyComponent},
  // {path: 'rr/userProfile', loadChildren:'./components/user-profile/user.module#UserModule'},
  // {path: 'my/userProfile/surveyCreat', component: SurveyCreatComponent,canActivate:[AuthGuard]},
  // {path: 'my/userProfile', component: UserProfileComponent,canActivate:[AuthGuard],

  {path: 'my/userProfile', component: UserComponent,canActivate:[AuthGuard],
children:[
  {path: '', component: UserProfileComponent,canActivate:[AuthGuard]},
  {path: 'surveyCreat', component: SurveyCreatComponent,canActivate:[AuthGuard]},
  {path: 'formCreat', component: FormCreatComponent},
  {path: 'listeCreat', component: ListCreatComponent}

]},



  // {path: 'my/userProfile/surveyCreat', component: SurveyCreatComponent},



  // ./user-profile/user.module#UserModule



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import {NgModule} from '@angular/core';
// import { MySurveyComponent } from './my-survey/my-survey.component';
import { AuthGuard } from 'src/app/shared/auth.guard';
// import { UserProfileComponent } from './user-profile.component';
import { userRouting } from './user.routing';
import { SheredModule } from 'src/app/shared/shered.module';
import { AuthService } from 'src/app/shared/auth.service';



@NgModule({
  imports:[userRouting,SheredModule ],
  // declarations:[MySurveyComponent,UserProfileComponent],
  // providers:[ AuthService]
})

export class UserModule{}

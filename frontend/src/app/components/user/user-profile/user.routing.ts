import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth.guard';
// import { AuthService } from 'src/app/shared/auth.service';

import { UserProfileComponent } from './user-profile.component';

export const userRoutes: Routes = [{
    path: '', component: UserProfileComponent,
    children:[
      {

      }
    ]
}]

// {path: 'rr/userProfile', component: UserProfileComponent,canActivate:[AuthGuard]},
// {path: 't', component: TComponent},


export const userRouting = RouterModule.forChild(userRoutes)

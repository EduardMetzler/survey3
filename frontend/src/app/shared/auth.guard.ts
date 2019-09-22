// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate  {

//   // constructor(private )

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
//     throw new Error("Method not implemented.");
//   }
//   // CanActivate(
//   //   next:ActivatedRouteSnapshot,
//   //   state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
//   //     return false
//   //   }


// }

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.isLoggedIn()){
        this.router.navigateByUrl('/singIn');
        this.authService.deleteToken()
      }
    return true;
  }

}

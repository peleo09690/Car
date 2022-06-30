import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = sessionStorage.getItem('id_token');
    if(!currentUser){
      this.router.navigate(['login']);
      return false;
    }
    // if (!currentUser) {
    //   // const accessToken = JSON.parse(currentUser).access_token;
    //   this.router.navigate(['login']);
    //   // if (!currentUser) {
    //   //   return false;
    //   // }
    // } else {
    //   this.router.navigate(['']);
    //   return false;
    // }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}

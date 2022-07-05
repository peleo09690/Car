import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  public constructor(
    private router: Router
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = localStorage.getItem('id_token');
    if (!currentUser) {
      this.router.navigate(['auth/login']);
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

  public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}

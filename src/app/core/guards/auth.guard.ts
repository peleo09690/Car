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
    const currentUser = sessionStorage.getItem('user');
    if (currentUser) {
      const accessToken = JSON.parse(currentUser).access_token;
      if (!accessToken) {
        this.router.navigate(['auth'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    } else {
      this.router.navigate(['auth'], { queryParams: { returnUrl: state.url } });
      return false;
    }
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}

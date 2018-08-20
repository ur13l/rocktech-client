import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { ROLE_ADMIN } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(
    private userService : UserService,
    private router : Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user = this.userService.getUser();
      if(user && user.role == ROLE_ADMIN) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
  }
}

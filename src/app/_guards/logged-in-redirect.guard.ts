import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { ROLE_ADMIN } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class LoggedInRedirectGuard implements CanActivate {

  constructor(
    private userService : UserService,
    private router : Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user = this.userService.getUser();
      if(user && user.token && user.email && user.role != ROLE_ADMIN) {
        
        return true;
      }
      else if(user && user.token && user.email && user.role == ROLE_ADMIN) {
        this.router.navigate(['/admin-dashboard']);
        return true;
      }
      this.router.navigate(['/accede']);      
      return false;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../_services/user.service';
import { ROLE_ADMIN } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class RedirectAuthenticatedGuard implements CanActivate {
  constructor(
    private userService : UserService,
    private router : Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let user = this.userService.getUser();
      if(user && user.token && user.email) {
        if(user.role == ROLE_ADMIN) {
          this.router.navigate(['/admin-dashboard']);
        }
        else if(user.approved) {
          this.router.navigate(['/segunda-etapa-formulario']);
        }
        else {
          this.router.navigate(['/segunda-etapa'])
        }
        return false;
      }
      
      return true;
  }
}

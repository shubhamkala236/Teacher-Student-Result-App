import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      if(!this.auth.isStudent())
      {
        this.router.navigate(['/']);
        return false;
      }
      return this.auth.isStudent();
  }
  
}

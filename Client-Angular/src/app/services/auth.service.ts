import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  setRole(role:string):void
  {
    localStorage.setItem('role',role);
  }

  getRole():string|null
  {
    return localStorage.getItem('role');
  }

  isTeacher()
  {
    return this.getRole()==='teacher';
  }

  isStudent()
  {
    return this.getRole()==='student';
  }

  isLoggedIn()
  {
    return this.getRole()!=null;
  }

  logout()
  {
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  onTeacherClick()
  {
    this.setRole('teacher');
  }

  onStudentClick()
  {
    this.setRole('student');
  }
    

}

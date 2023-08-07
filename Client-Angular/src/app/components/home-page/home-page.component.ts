import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router){}

  ngOnInit(): void {
    if(this.auth.isTeacher())
    {
      this.router.navigate(['teacher/allResults'])
    }
    if(this.auth.isStudent())
    {
      this.router.navigate(['student/search'])
    }
  }

  teacherClicked():void
  {
    this.auth.onTeacherClick();
  }

  studentClicked():void
  {
    this.auth.onStudentClick();
  }
}

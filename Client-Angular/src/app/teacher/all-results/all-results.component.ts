import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css'],
})
export class AllResultsComponent implements OnInit {
  allResults: any;
  studentCount:any;
  
  constructor(private teacherService: TeacherService,private router: Router) {}

  ngOnInit(): void {
    this.teacherService.getAllResults().subscribe((data) => {
      this.allResults = data;
      this.studentCount = this.allResults.length;
      console.warn(data);
    });
  }

  editResult(studentresult:any)
  {
    this.navigateToEdit(studentresult);
  }

  navigateToEdit(studentresult:any)
  {
    // debugger;
    this.router.navigate([`/teacher/updateResult/${studentresult.id}`],{state:{resultData:studentresult}});
  }

  deleteResult(id:number)
  {
    this.teacherService.deleteResult(id).subscribe((data)=>{
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigateByUrl(currentUrl);
      })
    })
    this.router.navigate(['/teacher/allResults'])
  }

}

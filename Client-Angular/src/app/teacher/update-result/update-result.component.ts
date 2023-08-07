import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { StudentResult } from 'src/app/interface/student-result';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent {
 
  studentResult:any;
  ResultForm:FormGroup;

  constructor(private router:Router,private teacherService:TeacherService,private fb:FormBuilder) {
    this.studentResult = this.router.getCurrentNavigation()?.extras.state;
    console.warn(this.studentResult);

    this.ResultForm = fb.group({
      rollno:[this.studentResult.resultData.Rollno,[Validators.required]],
      name:[this.studentResult.resultData.Name,[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],
      dob:[this.studentResult.resultData.Dob,[Validators.required]],
      score:[this.studentResult.resultData.Score,[Validators.required]]
    })
  }

  get name(){
    return this.ResultForm.get("name");
  }
  get rollno(){
    return this.ResultForm.get('rollno');
  }
  get dob(){
    return this.ResultForm.get('dob');
  }
  get score(){
    return this.ResultForm.get('score');
  }
  


  updateResult(Formdata:any)
  {
    // console.warn(Formdata);
    if(Formdata.invalid)
    {
      return;
    }
    const updatedResult:StudentResult = 
    {
      "Rollno": Formdata.rollno,
      "Name": Formdata.name,
      "Dob":Formdata.dob,
      "Score": Formdata.score
    };
    const id = this.studentResult.resultData.id;
   
    // debugger;
    this.teacherService.updateResult(updatedResult,id).subscribe((data)=>{
      console.warn(data);
      this.router.navigate(['/teacher/allResults']);
    })
    
  }

}

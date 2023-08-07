import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentResult } from 'src/app/interface/student-result';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-result',
  templateUrl: './create-result.component.html',
  styleUrls: ['./create-result.component.css'],
})
export class CreateResultComponent {
  ResultForm: FormGroup;
  error = false;
  errorDetails: any;

  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private router: Router
  ) {
    this.ResultForm = fb.group({
      rollno: ['', [Validators.required]],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      dob: ['', [Validators.required]],
      score: ['', [Validators.required]],
    });
  }

  get name() {
    return this.ResultForm.get('name');
  }
  get rollno() {
    return this.ResultForm.get('rollno');
  }
  get dob() {
    return this.ResultForm.get('dob');
  }
  get score() {
    return this.ResultForm.get('score');
  }

  resultObject: any;
  createRecord(formdata: FormGroup) {
    //recieved form data here
    console.warn(formdata);

    if (this.ResultForm.invalid) {
      return;
    }
    this.resultObject = formdata;
    // debugger;

    const studentResult: StudentResult = {
      Rollno: this.resultObject.rollno,
      Name: this.resultObject.name,
      Dob: this.resultObject.dob,
      Score: this.resultObject.score,
    };
    console.warn(studentResult);
    //send form data to backend
    this.teacherService.createResult(studentResult).subscribe(
      (data) => {
        console.warn(data);
        this.router.navigate(['/teacher/allResults']);
      },
      (error) => {
        this.error = true;
        this.errorDetails = error.message;
      }
    );
  }
}

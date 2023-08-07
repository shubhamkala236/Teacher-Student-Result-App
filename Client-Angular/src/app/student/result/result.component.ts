import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})


export class ResultComponent{

  data:any;
  studentResult:any;
  errorMessage:boolean = false;
  
  constructor(private route:ActivatedRoute,private router:Router)
  {
    this.studentResult = this.router.getCurrentNavigation()?.extras.state;
    // debugger;
    console.log(this.studentResult.data);
    if(this.studentResult.data.length === 1)
    {
      this.studentResult = this.studentResult.data[0];
      console.log(this.studentResult);
    }
    else
    {
      this.errorMessage = true;
      console.log("Unable to fetch this student result");
    }
      
  }
}

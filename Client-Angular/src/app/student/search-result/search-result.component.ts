import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {SearchDataService} from 'src/app/services/search-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
   
  searchForm:FormGroup;
  searchService:SearchDataService;
  studentResult:any;
  router:Router;

  constructor(private fb:FormBuilder,searchService:SearchDataService,router:Router)
  {
    this.searchForm = fb.group({
      roll:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],
    })

    this.searchService = searchService;
    this.router = router;
  }

  get name(){
    return this.searchForm.get("name");
  }
  get roll(){
    return this.searchForm.get('roll');
  }

  rollValue:any;
  nameValue:any;

formSubmit(formvalue:FormGroup)
{
  this.rollValue = formvalue.controls['roll'].value;
  this.nameValue = formvalue.controls['name'].value;

  //use search service to get result by posting on retrieving get on result page
  this.searchService.getResult(this.rollValue,this.nameValue).subscribe((data)=>{
    if(data)
    {
      this.studentResult = data;
      this.navigateToResult(data);
      console.warn(data);
      return;
    }
    // console.warn("Not a valid input")
  },(error)=>{
    console.warn(error);
  });

}

navigateToResult(student:any):void
{
  // this.router.navigate(['/student/result'],{queryParams:{student:JSON.stringify(student)}});
  this.router.navigate(['/student/result'],{state:{data:student}});
}
   
}

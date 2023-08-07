import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultComponent } from './search-result/search-result.component';
import { ResultComponent } from './result/result.component';
import { AuthStudentGuard  } from '../guards/auth-student.guard';


const routes: Routes = [
  {
    path:'student',
    canActivate:[AuthStudentGuard],
    children:[
      { path:'search',component:SearchResultComponent },
      { path:'result',component:ResultComponent },
      { path:'',component:SearchResultComponent },
      // { path:'23',redirectTo:'search' },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

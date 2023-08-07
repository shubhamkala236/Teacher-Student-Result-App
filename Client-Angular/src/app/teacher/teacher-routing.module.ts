import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllResultsComponent } from './all-results/all-results.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { AuthTeacherGuard } from '../guards/auth-teacher.guard';

const routes: Routes = [
  {
    path:'teacher',
    canActivate:[AuthTeacherGuard],
    children:[
      {path:'allResults',component:AllResultsComponent},
      {path:'',component:AllResultsComponent},
      {path:'createResult',component:CreateResultComponent},
      {path:'updateResult/:id',component:UpdateResultComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }

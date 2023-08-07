import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { AllResultsComponent } from './all-results/all-results.component';
import { CreateResultComponent } from './create-result/create-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AllResultsComponent,
    CreateResultComponent,
    UpdateResultComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TeacherModule { }

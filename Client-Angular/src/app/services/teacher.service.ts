import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { StudentResult } from '../interface/student-result';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://localhost:5000';
  
  constructor(private http:HttpClient) { }

  //Return all students result
  getAllResults()
  {
    return this.http.get(`${this.baseUrl}/alldata`);
  }

  //create result
  createResult(data:any)
  {
    return this.http.post(`${this.baseUrl}/create-result`,data);
  }

  //update Result
  updateResult(data:StudentResult,id:number)
  {
    // debugger;
    return this.http.put(`${this.baseUrl}/update-result/${id}`,data);
  }

  deleteResult(id:number)
  {
    return this.http.delete(`${this.baseUrl}/delete-result/${id}`);
  }
}

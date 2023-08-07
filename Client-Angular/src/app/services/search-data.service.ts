import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  private baseUrl = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getResult(rollno:number,name:string)
  {
    return this.http.get(`${this.baseUrl}/alldata/${rollno}/${name}`);
  }
  searchResult(data:any)
  {
    return this.http.post(`${this.baseUrl}`,data);
  }
}

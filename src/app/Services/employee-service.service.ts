import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http:HttpClient) { }
  postEmp(data:any){
    return this.http.post("http://localhost:3000/posts",data)

  }

  getdta(){
    
   
    return  this.http.get("http://localhost:3000/posts")

  }

}

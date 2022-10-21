import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http:HttpClient) { }
  postEmp(data:any){
    this.http.post("http://localhost:3000/posts",data)
  }

  getdta(){
    this.http.get("http://localhost:3000/posts")
  }
  // postEm(data:any){
  //   return this.http.post<any>("http://localhost:3000/posts",data)
  //   .pipe(map((res)=>{
  //     return res
  //   }))
  // }
}

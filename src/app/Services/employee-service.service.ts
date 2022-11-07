import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor( private http:HttpClient) { }

  postEmp1(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res

    }));

  };

  postEmp(data:any){
    return this.http.post("http://localhost:3000/posts",data)

  }

  getdta(){
    
   
    return  this.http.get("http://localhost:3000/posts")

  }
  delet(id:any){
    return this.http.delete("http://localhost:3000/posts/" + id)
  }

  updateEmp(data:any,id:number){
    return this.http.put("http://localhost:3000/posts/"+id,data)
  }

}

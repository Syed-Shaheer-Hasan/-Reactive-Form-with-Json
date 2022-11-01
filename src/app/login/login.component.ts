import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private formbuilder: FormBuilder , private http:HttpClient, private router: Router, private ngx:NgxUiLoaderService  ) { }
  public loginForm! : FormGroup;
  user:any;
  ngOnInit(): void {
    this.ngx.start();
    setTimeout(() => {
      this.ngx.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 1000);
    this.loginForm = this.formbuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required]

    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signUpusers")
    .subscribe(res =>{
    this.user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

    });
    if(this.user){
      
      this.loginForm.reset();
      this.router.navigate(['employee'])
    }
    })
  }

}

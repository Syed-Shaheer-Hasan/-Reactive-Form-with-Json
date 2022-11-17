import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // @Input() user!:[];
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  submit:boolean= false;
  registerform!: FormGroup;
  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      name: ['', [Validators.required,Validators.minLength(5)]],
      num: ['', [Validators.required,Validators.minLength(11)]],
      email: ['', [Validators.required,Validators.email,Validators.minLength(10),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required,Validators.minLength(6)]]

    })
  }
  get f() { return this.registerform.controls; }

  signUp() {
    this.submit= true;
    this.http.post<any>("http://localhost:3000/signUpusers", this.registerform.value)
    .subscribe(res => {
      alert("Sign Up SuccessFully..!!");
      this.registerform.reset();
      this.router.navigate(['login']);
    },
    err=>{
      alert("something Went Wrong")
    })
  }

}

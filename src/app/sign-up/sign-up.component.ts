import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  registerform!: FormGroup;
  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      name: ['', [Validators.required]],
      num: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    })
  }

  signUp() {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Employee } from '../Models/employee';
import { EmployeeServiceService } from '../Services/employee-service.service';
import { NgxUiLoaderService } from "ngx-ui-loader";



@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  submit = false;
  emailPromp = false;
  desigPromp = false;
  SalaryPromp = false;
  obj:any;



  CreateForm!: FormGroup;
  empObj: Employee = new Employee();

  constructor(private fb: FormBuilder, private ser: EmployeeServiceService, private ngx :NgxUiLoaderService) { };


  ngOnInit(): void {
    // this.ngx.start();
    // setTimeout(() => {
    //   this.ngx.stop(); // stop foreground spinner of the master loader with 'default' taskId
    // }, 1000);
    this.CreateForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(10)]],
      desig: ['', [Validators.required, Validators.minLength(5)]],
      salary: ['', [Validators.required, Validators.minLength(5)]]

    })
    this.getpostDta();
  }
  // validate(){
  //   if (!this.empObj.fname) {
  //     this.submit = true
  //   }
  //   else {
  //     this.submit = false

  //   }
  //   if (!this.empObj.email) {
  //     this.emailPromp = true
  //   }
  //   else {
  //     this.emailPromp = false

  //   }
  //   if (!this.empObj.desig) {
  //     this.desigPromp = true
  //   }
  //   else {
  //     this.desigPromp = false

  //   }
  //   if (!this.empObj.salary) {
  //     this.SalaryPromp = true
  //   }
  //   else {
  //     this.SalaryPromp = false

  //   }
  //   return !this.submit && !this.emailPromp && !this.desigPromp && !this.SalaryPromp
  // }

  get f() { return this.CreateForm.controls; }

  postData() {

    this.submit = true;
    if(this.CreateForm.invalid){
      return;
    }
   
    this.empObj.fname = this.CreateForm.value.fname
    this.empObj.email = this.CreateForm.value.email
    this.empObj.desig = this.CreateForm.value.desig
    this.empObj.salary = this.CreateForm.value.salary

    this.ser.postEmp(this.empObj).subscribe(res => {
      console.log(res)
    })
    this.getpostDta();

  }
    getpostDta(){
    this.ser.getdta().subscribe((res)=>{
      this.obj = res
    })
  }


  onReset(){
    this.submit = false;
    this.CreateForm.reset();
  }
}
  


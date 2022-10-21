import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms'
import { Employee } from '../Models/employee';
import {EmployeeServiceService } from  '../Services/employee-service.service'


@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  CreateForm!:FormGroup;
  empObj:Employee = new Employee();

  constructor(private fb:FormBuilder , private ser:EmployeeServiceService){ };
  

  ngOnInit(): void {
    this.CreateForm = this.fb.group({
    fname :[''],
    email :[''],
    desig :[''],
    salary:['']

    })
  }

  postData(){
    this.empObj.fname = this.CreateForm.value.fname
    this.empObj.email = this.CreateForm.value.email
    this.empObj.desig = this.CreateForm.value.desig
    this.empObj.salary = this.CreateForm.value.salary



  }

}

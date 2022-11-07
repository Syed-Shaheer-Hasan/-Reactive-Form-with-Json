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
  obj: any;
  showadd!:boolean;
  showupdate!:boolean;




  CreateForm!: FormGroup;
  empObj: Employee = new Employee();

  constructor(private fb: FormBuilder, private ser: EmployeeServiceService, private ngx: NgxUiLoaderService) { };


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

  get f() { return this.CreateForm.controls; }

  postData() {

    this.submit = true;
    if (this.CreateForm.invalid) {
      return;
    }

    this.empObj.fname = this.CreateForm.value.fname
    this.empObj.email = this.CreateForm.value.email
    this.empObj.desig = this.CreateForm.value.desig
    this.empObj.salary = this.CreateForm.value.salary

    this.ser.postEmp(this.empObj).subscribe(res => {
      console.log(res)
    this.getpostDta();
    this.CreateForm.reset();

    })

  }
  getpostDta() {
    this.ser.getdta().subscribe((res) => {
      this.obj = res
    })
  }


  onReset() {
    this.submit = false;
    this.CreateForm.reset();
  }
  deletData(user: any) {
    this.ser.delet(user.id).subscribe(res => {
      console.log(res);
      this.getpostDta();
    })
  }
  onEdit(user:any){
    this.showadd=false;
    this.showupdate=true;
    this.empObj.id = user.id;
    this.CreateForm.controls['fname'].setValue(user.fname);
    this.CreateForm.controls['email'].setValue(user.email);
    this.CreateForm.controls['desig'].setValue(user.desig);
    this.CreateForm.controls['salary'].setValue(user.salary);

  
  }
  onUpdate(){
    this.empObj.fname = this.CreateForm.value.fname
    this.empObj.email = this.CreateForm.value.email
    this.empObj.desig = this.CreateForm.value.desig
    this.empObj.salary = this.CreateForm.value.salary

    this.ser.updateEmp(this.empObj,this.empObj.id).subscribe((res)=>{
      console.log(res)
      this.getpostDta();
      
    })
  }

  addEmployee(){
    this.CreateForm.reset();
    this.showadd=true;
    this.showupdate=false;
  }
}


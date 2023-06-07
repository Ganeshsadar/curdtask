
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';
import { EmployeeModel } from './emp_dashbord_model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {

  constructor(private http: ProductserviceService) {

  }

  // employeeModelObj: EmployeeModel = new EmployeeModel();
  // employeedata: any = [];

  empData: any = [];

  ngOnInit(): void {
    this.http.getEmploy().subscribe(data => {
      this.empData = data
    })
  }

  // AllProduct: any;

  formValu = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    MoNo: new FormControl(),
    salary: new FormControl()

  })
  formValu1 = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    MoNo: new FormControl(),
    salary: new FormControl()

  })
  // usr: any;
  postEmployeeDetails() {

    console.log(this.formValu.value);

    this.http.postData(this.formValu.value).subscribe(res => {

      console.log(res);
      this.formValu.reset();
      let ref = document.getElementById('cancle')
      ref?.click();
      location.reload();
      // this.getAllEmployee();

    })


    // this.employeeModelObj.first_Name = this.formValu.value.first_name;
    // this.employeeModelObj.last_Name = this.formValu.value.last_name;
    // this.employeeModelObj.email = this.formValu.value.email;
    // this.employeeModelObj.MoNo = this.formValu.value.MoNo;
    // this.employeeModelObj.salary = this.formValu.value.salary;
    // console.log(this.formValu.value);

    // this.http.postEmploy(this.formValu.value)
    //   .subscribe((res: any) => {
    //     console.log(this.formValu.value);
    //     // //  alert("employ added succefully")
    //     //  this.formValu.reset();
    //     //  let ref = document.getElementById('cancle')
    //     //  ref?.click();
    //     //  this.getAllEmployee();
    //     // // this.usr = res;
    //   })

    // if (this.usr) {
    //   // alert("employ added succefully")
    //   // this.formValu.reset();
    //   // let ref = document.getElementById('cancle')
    //   // ref?.click();
    //   // this.getAllEmployee();
    // }
    // else {
    //   alert("something wrong")
    // }

  }
  // getAllEmployee() {
  //   this.http.getEmploy()
  //     .subscribe(res => {
  //       console.log(res)
  //       this.employeedata = res;
  //     })
  // }
  deletEmployee(id: any) {
    this.http.deletEmploy(id)
      .subscribe(res => {
        // alert("employee deleted");
        // this.getAllEmployee();
        location.reload();

      })

  }
  stuId = 0;
  onEdit(id: any, index: any) {
    // this.employeeModelObj.id = row.id;
    this.formValu1.controls['first_name'].setValue(this.empData[index].first_name);
    this.formValu1.controls['last_name'].setValue(this.empData[index].last_name);
    this.formValu1.controls['email'].setValue(this.empData[index].email);
    this.formValu1.controls['MoNo'].setValue(this.empData[index].MoNo);
    this.formValu1.controls['salary'].setValue(this.empData[index].salary);
    console.log(index);
    console.log(id);
    this.stuId = id;
  }

  // updateEmployeeDetails() {
  //   this.employeeModelObj.first_Name = this.formValu1.value.first_name;
  //   this.employeeModelObj.last_Name = this.formValu1.value.last_name;
  //   this.employeeModelObj.email = this.formValu1.value.email;
  //   this.employeeModelObj.MoNo = this.formValu1.value.MoNo;
  //   this.employeeModelObj.salary = this.formValu1.value.salary;
  //   this.http.updateEmploy(this.employeeModelObj, this.employeeModelObj.id)
  //     .subscribe(res => {
  //       alert("upadated succefully");

  //       // this.formValu.reset();
  //       // let ref = document.getElementById('cancle')
  //       // ref?.click();
  //       // this.getAllEmployee();
  //     })


  // }
  // data:any
  Update(formValu1: any) {
    this.http.updateEmploy(this.stuId, formValu1.value).subscribe(res => {
      console.log(res)
      location.reload()
    })
  }


}





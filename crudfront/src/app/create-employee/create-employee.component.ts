import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgModule } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 employee2:Employee=new Employee();



  constructor(private employeeService:EmployeeService,private router:Router) { }

  ngOnInit(): void {


  }
addemployee(){
  console.log(this.employee2);
  this.employeeService.createEmloyee(this.employee2).subscribe(data=>{
    console.log(data);
this.goToEmployeeList();
  },
  error=>console.log(error));
 
}

goToEmployeeList(){
  this.router.navigate(['/employees']);
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employee1:Employee[];






  
  constructor( private employeeService:EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
    this.getEmployee();
  }

getEmployee(){
  this.employeeService.getEmployeeList().subscribe(data=>{
    this.employee1=data;
  });
}
updateEmployee(id:number){
  this.router.navigate(['updateemployee',id]);
}

deleteEmployee(id:number){
  this.employeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployee();
  });
}

employeeDetails(id:number){
  this.router.navigate(['employeedetails',id]);
}


}

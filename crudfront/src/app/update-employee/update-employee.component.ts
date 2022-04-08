import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


id:number;
employee2:Employee=new Employee();

  constructor(private employeeService:EmployeeService,
    private router:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee2=data;
    });
    
    }
    updateemp(){
      console.log(this.id,this.employee2);
      this.employeeService.updateEmployee(this.id,this.employee2).subscribe(data=>{
           this.goToEmployeeList();
      });
      
      
    

    }


    goToEmployeeList(){
      this.route.navigate(['/employees']);
    }

  
  }
  



import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
  {path:'createemployee',component:CreateEmployeeComponent },
  {path:'updateemployee/:id',component:UpdateEmployeeComponent},
  {path:'employeedetails/:id',component:EmployeedetailsComponent},
  {path:'',redirectTo:'employees',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

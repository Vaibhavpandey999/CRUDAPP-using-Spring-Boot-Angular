import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


private baseurl="http://localhost:8080/crudapp/apiv1/employees";

  constructor(private http1:HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.http1.get<Employee[]>(`${this.baseurl}`);
  }

  createEmloyee(employee:Employee):Observable<Object>{
    return this.http1.post<Object>(`${this.baseurl}`,employee);
  }
    getEmployeeById(id:number):Observable<Employee>{
     return this.http1.get<Employee>(`${this.baseurl}/${id}`);
    }

updateEmployee(id:number,employee:Employee):Observable<Object>{
  return this.http1.put(`${this.baseurl}/${id}`,employee);
}

deleteEmployee(id:number):Observable<Object>{
  return this.http1.delete(`${this.baseurl}/${id}`);
}


}

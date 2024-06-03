import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeURL:string='http://localhost:3000'
  constructor(private _employee:HttpClient) { }

  postEmployee(data:any){
    return this._employee.post(`${this.employeeURL}/employees`,data)
  }
  getEmployee(){
    return this._employee.get(`http://localhost:3000/employees`)
  }
  deleteEmploye(id:any){
    
  }
}

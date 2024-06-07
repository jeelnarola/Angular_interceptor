import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeURL:string='http://localhost:3000'
  constructor(private _employee:HttpClient) { }
  loader=new BehaviorSubject<Boolean>(false)
  show(){
    this.loader.next(true)
  }
  hide(){
    this.loader.next(false)
  }
  postEmployee(data:any){
    return this._employee.post(`${this.employeeURL}/employees`,data)
  }
  getEmployee(){
    return this._employee.get(`http://localhost:3000/employees`)
  }
  getEmployeeUpdate(id:any){
    return this._employee.get(`http://localhost:3000/employees/${id}`)
  }
  deleteEmploye(id:any){
    return this._employee.delete(`${this.employeeURL}/employees/${id}`)
  }
  updateEmployee(id:string,data:any){
    return this._employee.put(`${this.employeeURL}/employees/${id}`,data)
  }
}

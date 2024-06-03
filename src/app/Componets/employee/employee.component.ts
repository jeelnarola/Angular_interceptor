import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  allEmployee:any;
  constructor (private EmployeeService:EmployeeService){

  }

  ngOnInit(): void {
    this.getEmployee()
    
  }
  
  getEmployee(){
    this.EmployeeService.getEmployee().subscribe((res:any)=>{
      this.allEmployee=res
      console.log(this.allEmployee);
    })
  }
}

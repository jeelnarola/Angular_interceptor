import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  loader:any;
  constructor(private employee:EmployeeService){
    this.employee.loader.subscribe(res=>{
      console.log("res",res);
      this.loader=res
    })
  }
}

import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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
      this.loader=res
    })
  }
  isLoading = new BehaviorSubject<boolean>(true);
}

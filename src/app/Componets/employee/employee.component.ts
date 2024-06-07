import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  subscribe(arg0: (res: any) => void) {
    throw new Error('Method not implemented.');
  }
  allEmployee:any;
  Serach:string=''
  filterCategory:string='name'
  constructor (private EmployeeService:EmployeeService,private router:Router){

  }

  ngOnInit(): void {
    this.getEmployee()

  }

  getEmployee(){
    this.EmployeeService.getEmployee().subscribe((res:any)=>{
      this.allEmployee=res 
    })
  }
  employeeDelete(id:any){ 
    this.EmployeeService.deleteEmploye(id).subscribe((ele:any) =>{

      this.getEmployee()
    })
  }
  updateEmployee(id:string){
    this.router.navigate([`/update/${id}`])
  }
  filterMenu(event:any){ 
    this.filterCategory=event.target.value
  }
}

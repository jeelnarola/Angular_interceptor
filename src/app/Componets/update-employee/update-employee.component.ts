import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  updateEmployee!:FormGroup
  constructor(private employeeService:EmployeeService,private ActiveRout:ActivatedRoute){

  }
  ngOnInit():void{ 
    this.updateEmployee=new FormGroup({
      first: new FormControl(''),
      last:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      position:new FormControl(''),
      department:new FormControl(''),

    });
    this.EmployeesShow();
  }

  updateEmployeeForm(){
   this.employeeService.updateEmployee(this.ActiveRout.snapshot.params?.['id'],{
    name:this.updateEmployee.value.first+" " + this.updateEmployee.value.last,
    position: this.updateEmployee.value.position,
    department: this.updateEmployee.value.department,
    email: this.updateEmployee.value.email,
    phone:this.updateEmployee.value.phone
   }).subscribe((ele:any)=>{
      alert("Employee Update Successfully...")
   })
  }
  EmployeesShow(){
    this.employeeService.getEmployeeUpdate(this.ActiveRout.snapshot.paramMap.get('id')).subscribe((ele:any)=>{ 
      let firstname=ele.name.split(" ")[0]
      let lastname=ele.name.split(" ")[1] 

      this.updateEmployee.patchValue({
        first:firstname,
        last:lastname,
        email:ele.email,
        phone:ele.phone,
        position:ele.position,
        department:ele.department
      })
    })
  }
}

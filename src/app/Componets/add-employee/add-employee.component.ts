import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first, retry } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeAddForm!:FormGroup;
  employeeBtn:boolean=false
  id:number=0
  constructor(private employeeService:EmployeeService){

  }
  ngOnInit(): void {
    console.log(this.employeeService.getEmployee().subscribe((res:any)  =>{
      this.id=res.length+1
      
    }))
    
    this.employeeAddcontrole()
  }
  employeeAddcontrole(){
    this.employeAddForm=new FormGroup({
     
      first:new FormControl('',[Validators.required]),
      last:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      position:new FormControl('',[Validators.required]),
      department:new FormControl('',[Validators.required])
    })
  }


    // EMPLOYEE ADD FORM VALIDATION

  get employeeFirst(){return this.employeAddForm.get('first')}
  get employeeLast(){return this.employeAddForm.get('last')}
  get employeeemail(){return this.employeAddForm.get('email')}
  get employeePhone(){return this.employeAddForm.get('phone')}
  get employeePosition(){return this.employeAddForm.get('position')}
  get employeeDepart(){return this.employeAddForm.get('department')}


  addEmployee(){
    if(this.employeAddForm.invalid){
     this.employeeBtn=true
    };
    if(this.employeAddForm.valid){
      this.employeeService.postEmployee({
        id:this.id,
        name:this.employeAddForm.value.first+" " + this.employeAddForm.value.last,
        position: this.employeAddForm.value.position,
        department: this.employeAddForm.value.department,
        email: this.employeAddForm.value.email,
        phone:this.employeAddForm.value.phone
      }).subscribe((res)=>{
        console.log(res);
        
        alert('Employee Add Successfully...')
        this.employeAddForm.reset()
      })
    }
    
  }
}

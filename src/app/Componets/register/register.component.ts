import { AuthService } from '../../services/user/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup
  submitbtn:boolean=false
  check:boolean=false
  token:string='AuthToken'
  passwordFieldType:string='password'
  toggleButtonText:string='Show Password'
  constructor (private AuthService:AuthService, private router:Router){

  }
  ngOnInit(): void {
    this.registerFormControler()
    console.log(this.check);
    
  }
  registerFormControler():any{
    this.registerForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      gender:new FormControl('',[Validators.required])
    })
  }

  // Form Validation Add
  get emailValidation(){return this.registerForm.get('email')}
  get passwordValidation(){return this.registerForm.get('password')}
  get genderValidation(){return this.registerForm.get('gender')}

  register():any{
    if(this.registerForm.invalid){
      this.submitbtn=true
    }
    if(this.registerForm.valid){
      this.AuthService.checkRegister().subscribe((ele:any)=>{
        ele.find((item:any)=>{ return this.check= item.email==this.registerForm.value.email})
        if(this.check){
          alert('Email already exists...')
         setTimeout(()=>{
          this.router.navigate(['/login'])
         },2000)
        }else{
          this.AuthService.postRegister(this.registerForm.value).subscribe((ele)=>{
            alert("rigister successfully...")
           this.registerForm.reset()
           sessionStorage.setItem("token",this.token)
           this.router.navigate(['/'])
          })
        }
      })
      
    }
  }
  togglePassword(){
    this.passwordFieldType=(this.passwordFieldType=='password')?'text':'password';
    this.toggleButtonText=(this.passwordFieldType=='password')?'Show Password':'Hide Password';
  }
}

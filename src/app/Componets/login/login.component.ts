import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup
  loginInavlidbtn:boolean=false
  emailCkeck:boolean=false
  passwordCheck:boolean=false
  token:string='AuthToken';
  passwordFieldType:string='password'
  toggleButtonText:string='Show Password'
  constructor(private loginService:AuthService,private router:Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loginFromControler()
  }
  loginFromControler(){
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  
  login(){
    if(this.loginForm.invalid){
      this.loginInavlidbtn=true
    }
    if(this.loginForm.valid){
      this.loginService.checkRegister().subscribe((ele:any)=>{
        ele.find((item:any)=>{
          if((item.email==this.loginForm.value.email)){
           this.emailCkeck=item.email==this.loginForm.value.email
          }
          if(item.password==this.loginForm.value.password){
            this.passwordCheck=item.password==this.loginForm.value.password
          }
        })
        if(this.emailCkeck==false){
          alert("Email Not Found...")
        }else{
          if(this.passwordCheck==false){
            alert("Password not match...")
          }else{
            alert("login successfully...")
            sessionStorage.setItem("token",this.token)
            this.router.navigate(['/'])
          }
        }
      })
    }
  }
  toggleButton(){
    this.passwordFieldType=(this.passwordFieldType=='password')?'text':'password';
  this.toggleButtonText=(this.passwordFieldType=='password')?'Show Password':'Hide Password';
  }
  // LOGINFROM VALIDATION 
    get loginEmailValidation(){return this.loginForm.get('email')}
    get loginPasswordValidation(){return this.loginForm.get('password')}
}

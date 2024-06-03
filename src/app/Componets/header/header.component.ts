import { AuthService } from 'src/app/services/user/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoutLoginToggle:boolean=false
  constructor (private AuthService:AuthService,private router:Router){
  }
 
  logoutbtn:boolean=false
  logntRegister:boolean=true
  ngOnInit(): void {
    this.isLoggIn()
   if(sessionStorage.getItem('token')){
     this.logoutbtn=true
     this.logntRegister=false
   }
  }
  isLoggIn(){
    if(sessionStorage.getItem('token')){
      this.router.navigate(['/']);
    }
  }
  
  registerRouter():void{
    this.router.navigate(['/register']);
  }
  loginRouter():void{
    this.router.navigate(['/login']);
  }
  logOut(){
    alert('User LogOut successfully ...')
    setTimeout(()=>{
      sessionStorage.clear()
      this.router.navigate(['/login']);
    },2000)
  }
}

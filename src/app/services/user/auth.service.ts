import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { flush } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
  }
  getToken():boolean|null{
    return sessionStorage.getItem('token')!==null
  }
  isLoggIn():boolean{
    return this.getToken()===true
  }
  constructor(private _http:HttpClient) { }
  url:string='http://localhost:3000'
  checkRegister(){
    return this._http.get(`${this.url}/register`)
  }
  postRegister(data:any){
   return this._http.post( `${this.url}/register`,data)
  }
}

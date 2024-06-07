import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import {  finalize, Observable, tap } from 'rxjs';
import { EmployeeService } from '../services/employee/employee.service';
import { ToastService } from 'angular-toastify';
// import {finalize} 'rxjs/operators'

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private employeService:EmployeeService,private _toastService:ToastService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request).pipe(
    //   tap(event=>{
    //     this.employeService.loader.next(true)
    //     if(event.type==HttpEventType.Response){
    //       if(event.status==200){
    //         this.employeService.loader.next(false)
    //       }
    //     }
    //   })
    // );

    // OR

    this.employeService.show()
    return next.handle(request).pipe(
      finalize(():void => {
        this.employeService.hide()
        this._toastService.warn('Something Error...')
      })
    );
  }
}

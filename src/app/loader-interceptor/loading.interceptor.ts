import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { EmployeeService } from '../services/employee/employee.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private employeService:EmployeeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    return next.handle(request).pipe(
      tap(event=>{
        this.employeService.loader.next(true)
        if(event.type==HttpEventType.Response){
          if(event.status==200){
            this.employeService.loader.next(false)
          }
        }
      })
    );
  }
}

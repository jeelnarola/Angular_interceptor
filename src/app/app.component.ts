import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_interceptor';
  constructor (private _toastService:ToastService){

  }
}

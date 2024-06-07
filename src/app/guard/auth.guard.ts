import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/user/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router:Router=inject(Router)
  const userService:AuthService=inject(AuthService)

  if(!userService.isLoggIn()){
    router.navigate(['/login'])
  }
  return true;
};
function canActivate() {
  throw new Error('Function not implemented.');
}


import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/user/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router:Router=inject(Router)
  const userService:AuthService=inject(AuthService)
  if(!userService.isLoggIn()){
    router.navigate(['/login'])
  }
  return true;
};

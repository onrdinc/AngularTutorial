import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //belli şart sağlanmazsa login sayfamdan home sayfama gidilmesin istiyorum
  const token: string | null = localStorage.getItem("token");
  const router = inject(Router);
  if (!token) {
    router.navigateByUrl("/login");
    return false;
  }
  return true;
};

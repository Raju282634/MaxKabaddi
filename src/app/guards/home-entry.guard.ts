import { CanActivateFn, Router } from '@angular/router';
import { RouteAccessService } from '../services/route-access.service';
import { inject } from '@angular/core';

export const homeEntryGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const routeAccessService = inject(RouteAccessService);

  if(routeAccessService.isHomeVisited()){
    return true;
  }
  else {
    router.navigate(['/home']);
    return false;
  }
};
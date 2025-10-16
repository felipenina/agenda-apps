import { CanActivateFn } from '@angular/router';

export const onlyLoggedUserGuard: CanActivateFn = (route, state) => {
  return true;
};

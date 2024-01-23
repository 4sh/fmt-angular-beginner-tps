import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const isAuthenticated: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if (!authService.currentSession) {
        return router.createUrlTree(['/auth/login']);
    }
    return true;
};

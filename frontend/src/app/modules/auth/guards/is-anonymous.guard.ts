import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const isAnonymous: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if (authService.currentSession) {
        return router.createUrlTree(['/cellar']);
    }
    return true;
};


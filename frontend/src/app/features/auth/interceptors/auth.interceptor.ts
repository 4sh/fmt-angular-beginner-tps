import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    return next(req.clone({
        headers: req.headers.append('Authorization', authService.currentSession?.id || '')
    }));
};

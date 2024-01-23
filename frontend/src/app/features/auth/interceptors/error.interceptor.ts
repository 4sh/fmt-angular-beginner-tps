import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    return next(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 404) {
                    router.navigate(['/']).then();
                } else if (error.status === 401 || error.status === 403) {
                    router.navigate(['/auth']).then();
                }
                return throwError(() => error);
            })
        );
};

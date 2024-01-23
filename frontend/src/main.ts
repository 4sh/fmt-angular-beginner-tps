import {bootstrapApplication} from '@angular/platform-browser';
import {AppRootPageComponent} from './app/pages/app-root-page/app-root-page.component';
import {provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app/app-root.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from 'ngx-toastr';
import {authInterceptor} from './app/features/auth/interceptors/auth.interceptor';

bootstrapApplication(AppRootPageComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
        provideRouter(routes, withComponentInputBinding()),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right',
            progressBar: true,
        })
    ]
})
    .catch(err => console.error(err));


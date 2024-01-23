import {bootstrapApplication} from '@angular/platform-browser';
import {AppRootPageComponent} from './app/pages/app-root-page/app-root-page.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {RouterModule} from '@angular/router';
import {routes} from './app/app-root.routes';
import {provideToastr} from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations';

bootstrapApplication(AppRootPageComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        importProvidersFrom(RouterModule.forRoot(routes)),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right',
            progressBar: true,
        })
    ]
})
    .catch(err => console.error(err));


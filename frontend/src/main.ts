import {bootstrapApplication} from '@angular/platform-browser';
import {AppRootPageComponent} from './app/pages/app-root-page/app-root-page.component';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';
import {routes} from './app/app-root.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideToastr} from 'ngx-toastr';
import {authInterceptor} from './app/features/auth/interceptors/auth.interceptor';
import {provideTranslateService, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LocaleService} from './app/services/locale.service';

bootstrapApplication(AppRootPageComponent, {
    providers: [
        provideHttpClient(withInterceptorsFromDi(), withInterceptors([authInterceptor])),
        provideRouter(routes, withComponentInputBinding()),
        provideAnimations(),
        provideToastr({
            positionClass: 'toast-bottom-right',
            progressBar: true,
        }),
        provideTranslateService({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        {
            provide: LOCALE_ID,
            deps: [LocaleService],
            useFactory: (localeService: LocaleService) => localeService.getLocale()
        }
    ]
})
    .catch(err => console.error(err));

export function createTranslateLoader(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, '/static/i18n/labels_', '.json');
}

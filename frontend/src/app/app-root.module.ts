import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './app-root.routes';
import {AppRootPageComponent} from './pages/app-root-page/app-root-page.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptor} from './modules/auth/interceptors/auth.interceptor';
import {errorInterceptor} from './modules/auth/interceptors/error.interceptor';
import {AppMenuComponent} from './components/app-menu/app-menu.component';
import {AuthModule} from './modules/auth/auth.module';
import {CellarModule} from './modules/cellar/cellar.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient, '/static/i18n/labels_', '.json');
}

const components: unknown[] = [
    AppHeaderComponent,
    AppMenuComponent,
    AppFooterComponent
];

const pages: unknown[] = [
    AppRootPageComponent
];

@NgModule({
    declarations: [
        components,
        pages
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {bindToComponentInputs: true}),
        TranslateModule.forRoot({
            defaultLanguage: 'fr',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        FormsModule,
        AuthModule,
        CellarModule
    ],
    bootstrap: [AppRootPageComponent],
    providers: [
        provideHttpClient(
            withInterceptors([authInterceptor, errorInterceptor])
        )
    ]
})
export class AppRootModule {
}

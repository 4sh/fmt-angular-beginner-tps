import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRootPageComponent} from './pages/app-root-page/app-root-page.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import {AuthModule} from './modules/auth/auth.module';
import {RouterModule} from '@angular/router';
import {routes} from './app-root.routes';
import {CellarModule} from './modules/cellar/cellar.module';
import {SharedModule} from '../shared/shared.module';
import {authInterceptor} from './modules/auth/interceptors/auth.interceptor';
import {errorInterceptor} from './modules/auth/interceptors/error.interceptor';

const components: unknown[] = [
    AppHeaderComponent,
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
        SharedModule,
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

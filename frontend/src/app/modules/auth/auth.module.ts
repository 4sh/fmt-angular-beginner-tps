import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routes} from './auth.routes';
import {TranslateModule} from '@ngx-translate/core';

const components: unknown[] = [];

const pages: unknown[] = [
    AuthPageComponent,
    LoginPageComponent
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
        RouterModule.forChild(routes),
        FormsModule,
        TranslateModule
    ]
})
export class AuthModule {
}
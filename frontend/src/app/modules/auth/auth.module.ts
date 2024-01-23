import {NgModule} from '@angular/core';
import {CommonModule, UpperCasePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routes} from './auth.routes';
import {UserIdentityPipe} from './pipes/user-identity.pipe';

const components: unknown[] = [];

const pages: unknown[] = [
    AuthPageComponent,
    LoginPageComponent
];

const pipes: unknown[] = [
    UserIdentityPipe
];

@NgModule({
    declarations: [
        components,
        pages,
        pipes
    ],
    exports: [
        pipes
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        FormsModule
    ],
    providers: [
        UpperCasePipe
    ]
})
export class AuthModule {
}

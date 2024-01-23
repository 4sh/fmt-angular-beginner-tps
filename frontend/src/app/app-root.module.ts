import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRootPageComponent} from './pages/app-root-page/app-root-page.component';
import {AppHeaderComponent} from './components/app-header/app-header.component';
import {AppFooterComponent} from './components/app-footer/app-footer.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './modules/auth/auth.module';
import {RouterModule} from '@angular/router';
import {routes} from './app-root.routes';
import {CellarModule} from './modules/cellar/cellar.module';

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
        AuthModule,
        CellarModule
    ],
    bootstrap: [AppRootPageComponent],
    providers: []
})
export class AppRootModule {
}

import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routes} from './cellar.routes';
import {BottleTileComponent} from './components/bottle-tile/bottle-tile.component';
import {CellarPageComponent} from './pages/cellar-page/cellar-page.component';
import {BottlesListPageComponent} from './pages/bottles-list-page/bottles-list-page.component';

const components: unknown[] = [
    BottleTileComponent
];

const pages: unknown[] = [
    CellarPageComponent,
    BottlesListPageComponent
];

const pipes: unknown[] = [];

@NgModule({
    declarations: [
        components,
        pages,
        pipes
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        FormsModule,
        NgOptimizedImage
    ]
})
export class CellarModule {
}

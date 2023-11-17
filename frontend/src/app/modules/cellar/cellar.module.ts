import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {routes} from './cellar.routes';
import {BottleTileComponent} from './components/bottle-tile/bottle-tile.component';
import {CellarPageComponent} from './pages/cellar-page/cellar-page.component';
import {BottlesListPageComponent} from './pages/bottles-list-page/bottles-list-page.component';
import {BottleDetailsPageComponent} from './pages/bottle-details-page/bottle-details-page.component';
import {StatsPageComponent} from './pages/stats-page/stats-page.component';
import {TranslateModule} from '@ngx-translate/core';

const components: unknown[] = [
    BottleTileComponent
];

const pages: unknown[] = [
    CellarPageComponent,
    BottlesListPageComponent,
    BottleDetailsPageComponent,
    StatsPageComponent
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
export class CellarModule {
}

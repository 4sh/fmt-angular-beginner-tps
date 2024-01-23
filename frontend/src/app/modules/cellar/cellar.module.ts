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
import {BottleStickerImageComponent} from './components/bottle-sticker-image/bottle-sticker-image.component';
import {StatsPageComponent} from './pages/stats-page/stats-page.component';
import {BottleDetailsPageComponent} from './pages/bottle-details-page/bottle-details-page.component';
import {AppMenuComponent} from './components/app-menu/app-menu.component';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../shared/shared.module';
import {FilterByEstatePipe} from './pipes/filter-by-estate.pipe';
import {ExistingUrlValidatorDirective} from './directives/existing-url-validator.directive';

const directives: unknown[] = [
    ExistingUrlValidatorDirective
];

const components: unknown[] = [
    AppMenuComponent,
    BottleTileComponent,
    BottleStickerImageComponent
];

const pages: unknown[] = [
    CellarPageComponent,
    BottlesListPageComponent,
    BottleDetailsPageComponent,
    BottleStickerImageComponent,
    StatsPageComponent
];

const pipes: unknown[] = [
    FilterByEstatePipe
];

@NgModule({
    declarations: [
        directives,
        components,
        pages,
        pipes,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        FormsModule,
        TranslateModule,
        SharedModule,
        NgOptimizedImage
    ]
})
export class CellarModule {
}

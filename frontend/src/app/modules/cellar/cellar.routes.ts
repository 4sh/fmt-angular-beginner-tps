import {Routes} from '@angular/router';
import {CellarPageComponent} from './pages/cellar-page/cellar-page.component';
import {BottlesListPageComponent} from './pages/bottles-list-page/bottles-list-page.component';
import {isAuthenticated} from '../auth/guards/is-authenticated.guard';
import {BottleDetailsPageComponent} from './pages/bottle-details-page/bottle-details-page.component';
import {StatsPageComponent} from './pages/stats-page/stats-page.component';
import {RxjsSandboxPageComponent} from './pages/rxjs-sandbox-page/rxjs-sandbox-page.component';

export const routes: Routes = [
    {
        path: 'cellar',
        component: CellarPageComponent,
        canActivate: [isAuthenticated],
        children: [
            {
                path: 'list',
                component: BottlesListPageComponent
            },
            {
                path: 'bottle/:id/details',
                component: BottleDetailsPageComponent
            },
            {
                path: 'stats',
                component: StatsPageComponent
            },
            {
                path: 'rxjs-sandbox',
                component: RxjsSandboxPageComponent
            },
            {
                path: '**',
                redirectTo: 'list'
            }
        ]
    }
];

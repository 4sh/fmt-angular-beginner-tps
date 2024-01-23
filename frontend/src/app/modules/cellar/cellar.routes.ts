import {Routes} from '@angular/router';
import {CellarPageComponent} from './pages/cellar-page/cellar-page.component';
import {BottlesListPageComponent} from './pages/bottles-list-page/bottles-list-page.component';
import {isAuthenticated} from '../auth/guards/is-authenticated.guard';

export const routes: Routes = [
    {
        path: 'cellar',
        component: CellarPageComponent,
        canActivate: [isAuthenticated],
        children: [
            {
                path: '',
                component: BottlesListPageComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

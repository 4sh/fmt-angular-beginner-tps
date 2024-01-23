import {Routes} from '@angular/router';
import {cellarRoutes} from './features/cellar/cellar.routes';
import {authRoutes} from './features/auth/auth.routes';

export const routes: Routes = [
    ...authRoutes,
    ...cellarRoutes,
    {
        path: '**',
        redirectTo: '/cellar'
    }
];

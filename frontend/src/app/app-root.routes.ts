import {Routes} from '@angular/router';
import {authRoutes} from './features/auth/auth.routes';

export const routes: Routes = [
    ...authRoutes,
    {
        path: '**',
        redirectTo: '/auth'
    }
];

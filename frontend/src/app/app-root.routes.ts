import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/auth'
    }
];

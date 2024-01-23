import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/cellar',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/cellar'
    }
];

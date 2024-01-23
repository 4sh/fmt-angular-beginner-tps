import {Routes} from '@angular/router';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {isAnonymous} from './guards/is-anonymous.guard';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthPageComponent,
        canActivate: [isAnonymous],
        children: [
            {
                path: 'login',
                component: LoginPageComponent
            },
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }
        ]
    }
];

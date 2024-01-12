import {Component} from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    public login?: string;
    public password?: string;
    public authStatus?: 'success' | 'error';

    public authenticate(): void {
        if ('test' === this.login && 'test' === this.password) {
            this.authStatus = 'success';
        } else {
            this.authStatus = 'error';
        }
    }
}

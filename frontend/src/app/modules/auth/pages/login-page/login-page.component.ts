import {Component} from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    public login?: string;
    public password?: string;

    public authenticate(): void {
        // TODO
    }
}

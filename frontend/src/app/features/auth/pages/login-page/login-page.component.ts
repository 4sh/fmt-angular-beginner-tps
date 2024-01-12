import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [
        FormsModule
    ],
    standalone: true
})
export class LoginPageComponent {
    public login?: string;
    public password?: string;

    public authenticate(): void {
        // TODO
    }
}

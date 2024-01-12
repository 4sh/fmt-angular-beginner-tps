import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'auth-page',
    templateUrl: './auth-page.component.html',
    styleUrl: './auth-page.component.scss',
    imports: [
        RouterOutlet
    ],
    standalone: true
})
export class AuthPageComponent {

}

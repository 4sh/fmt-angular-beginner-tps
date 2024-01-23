import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html',
    imports: [
        RouterLink,
        RouterLinkActive,
        TranslatePipe
    ],
    styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent {
}

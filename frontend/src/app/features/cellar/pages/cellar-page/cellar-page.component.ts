import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppMenuComponent} from '../../components/app-menu/app-menu.component';

@Component({
    selector: 'cellar-page',
    templateUrl: './cellar-page.component.html',
    imports: [
        RouterOutlet,
        AppMenuComponent
    ],
    styleUrl: './cellar-page.component.scss'
})
export class CellarPageComponent {

}

import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppFooterComponent} from '../../components/app-footer/app-footer.component';
import {AppHeaderComponent} from '../../components/app-header/app-header.component';

@Component({
    selector: 'app-root-page',
    templateUrl: './app-root-page.component.html',
    styleUrl: './app-root-page.component.scss',
    imports: [
        RouterOutlet,
        AppFooterComponent,
        AppHeaderComponent
    ],
    standalone: true
})
export class AppRootPageComponent {
}

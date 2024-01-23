import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
    imports: [
        RouterLink
    ],
    standalone: true
})
export class AppHeaderComponent { // TODO
    // TODO

    public logout(): void {
        // TODO
    }
}

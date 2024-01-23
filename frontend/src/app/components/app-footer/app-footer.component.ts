import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrl: './app-footer.component.scss',
    imports: [
        TranslatePipe
    ]
})
export class AppFooterComponent {

}

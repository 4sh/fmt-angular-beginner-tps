import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppFooterComponent} from '../../components/app-footer/app-footer.component';
import {AppHeaderComponent} from '../../components/app-header/app-header.component';
import {TranslateService} from '@ngx-translate/core';
import {LocaleService} from '../../services/locale.service';

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
    constructor(translateService: TranslateService, localeService: LocaleService) {
        translateService.use(localeService.getLocale());
    }
}

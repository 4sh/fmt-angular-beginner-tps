import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {LocaleService} from "../../services/locale.service";

@Component({
    selector: 'app-root-page',
    templateUrl: './app-root-page.component.html',
    styleUrl: './app-root-page.component.scss'
})
export class AppRootPageComponent {
    constructor(translateService: TranslateService, localeService: LocaleService) {
        translateService.use(localeService.getLocale());
    }
}

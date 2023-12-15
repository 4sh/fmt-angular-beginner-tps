import {Component, OnInit} from '@angular/core';
import {LocaleService, supportedLocales} from '../../services/locale.service';

@Component({
    selector: 'app-locale-picker',
    templateUrl: './app-locale-picker.component.html',
    styleUrl: './app-locale-picker.component.scss'
})
export class AppLocalePickerComponent implements OnInit {
    public supportedLocales = supportedLocales;
    public currentLocale?: string;

    constructor(private service: LocaleService) {
    }

    ngOnInit(): void {
        this.currentLocale = this.service.getLocale();
    }

    public setLocale(locale: string) {
        this.service.setLocale(locale);
        location.reload();
    }
}

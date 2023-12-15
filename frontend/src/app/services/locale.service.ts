import {Injectable} from "@angular/core";

export const supportedLocales: string[] = ['fr-FR', 'en-GB'];
const defaultLocale: string = 'fr-FR';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {
    private storageKey = '__current_locale__';

    public getLocale(): string {
        return localStorage.getItem(this.storageKey) || defaultLocale;
    }

    public setLocale(locale: string): void {
        localStorage.setItem(this.storageKey, locale);
    }
}

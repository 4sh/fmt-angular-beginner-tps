import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastr: ToastrService,
                private translateService: TranslateService) {
    }

    public success(messageKey: string, messageParams?: MessageParams): void {
        this.toastr.success(this.translateService.instant(messageKey, messageParams));
    }

    public info(messageKey: string, messageParams?: MessageParams): void {
        this.toastr.info(this.translateService.instant(messageKey, messageParams));
    }

    public warning(messageKey: string, messageParams?: MessageParams): void {
        this.toastr.warning(this.translateService.instant(messageKey, messageParams));
    }

    public error(messageKey: string, messageParams?: MessageParams): void {
        this.toastr.error(this.translateService.instant(messageKey, messageParams));
    }
}

export type MessageParams = Record<string, string | number>;

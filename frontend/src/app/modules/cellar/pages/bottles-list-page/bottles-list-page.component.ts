import {Component, OnInit} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {NotificationService} from '../../../../../shared/services/notification.service';
import {delay} from 'rxjs';
import {AuthService} from '../../../auth/services/auth.service';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
    styleUrl: './bottles-list-page.component.scss'
})
export class BottlesListPageComponent implements OnInit {
    public bottles?: Bottle[];

    constructor(private cellarService: CellarService,
                private authService: AuthService,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.bottles = this.cellarService.getManyBottles();

        this.authService.getCurrentUserIdentity()
            .pipe(
                delay(5000)
            )
            .subscribe(() => this.togglePromotionCode());
    }

    private togglePromotionCode(): void {
        this.notificationService.success('Code promo -20% : WINE2024');
    }
}

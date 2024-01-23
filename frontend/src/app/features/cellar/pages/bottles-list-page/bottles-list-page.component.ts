import {Component, OnInit} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {RouterLink} from '@angular/router';
import {NotificationService} from '../../../../../shared/services/notification.service';
import {BottleTileComponent} from '../../components/bottle-tile/bottle-tile.component';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
    imports: [
        RouterLink,
        BottleTileComponent
    ],
    styleUrl: './bottles-list-page.component.scss'
})
export class BottlesListPageComponent implements OnInit {
    public bottles?: Bottle[];

    constructor(private cellarService: CellarService,
                private notificationService: NotificationService) {
    }

    ngOnInit(): void {
        this.bottles = this.cellarService.getManyBottles();

        // TODO
    }

    private togglePromotionCode(): void {
        this.notificationService.success('Code promo -20% : WINE2024');
    }
}

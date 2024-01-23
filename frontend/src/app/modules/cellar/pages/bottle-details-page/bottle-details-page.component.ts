import {Component, Input} from '@angular/core';
import {Bottle, Color} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {NotificationService} from '../../../../../shared/services/notification.service';

@Component({
    selector: 'bottle-details-page',
    templateUrl: './bottle-details-page.component.html',
    styleUrl: './bottle-details-page.component.scss'
})
export class BottleDetailsPageComponent {
    public Color = Color;
    public bottle?: Bottle;

    constructor(private cellarService: CellarService,
                private notificationService: NotificationService) {
    }

    @Input()
    public set id(id: string) {
        if (id) {
            this.cellarService.getOneBottleById(id)
                .subscribe(bottle => {
                    if (bottle === undefined) {
                        this.notificationService.error('La bouteille a été retirée de la cave');
                    }

                    this.bottle = bottle;
                });
        }
    }
}

import {Component, effect, input, signal} from '@angular/core';
import {Bottle, Color} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {RouterLink} from '@angular/router';
import {NotificationService} from '../../../../../shared/services/notification.service';

@Component({
    selector: 'bottle-details-page',
    templateUrl: './bottle-details-page.component.html',
    imports: [
        RouterLink
    ],
    styleUrl: './bottle-details-page.component.scss'
})
export class BottleDetailsPageComponent {
    public Color = Color;
    public bottle = signal<Bottle | undefined>(undefined);
    public id = input<string>();

    constructor(private cellarService: CellarService,
                private notificationService: NotificationService) {
        effect((onCleanup) => {
            const id = this.id();
            if (id) {
                const sub = this.cellarService.getOneBottleById(id)
                    .subscribe(bottle => {
                        if (bottle === undefined) {
                            this.notificationService.error('La bouteille a été retirée de la cave');
                        }

                        this.bottle.set(bottle);
                    });
                onCleanup(() => sub.unsubscribe());
            }
        });
    }
}

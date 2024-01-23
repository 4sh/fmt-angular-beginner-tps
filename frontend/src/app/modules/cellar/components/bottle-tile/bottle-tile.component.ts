import {Component, Input} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {NotificationService} from '../../../../../shared/services/notification.service';

@Component({
    selector: 'bottle-tile',
    templateUrl: './bottle-tile.component.html',
    styleUrl: './bottle-tile.component.scss'
})
export class BottleTileComponent {
    @Input() public bottle?: Bottle;

    constructor(private notificationService: NotificationService) {
    }

    public onImageClick(bottle: Bottle): void {
        this.notificationService
            .success(`click sur l’image de la bouteille ${bottle.estate}`);
    }
}

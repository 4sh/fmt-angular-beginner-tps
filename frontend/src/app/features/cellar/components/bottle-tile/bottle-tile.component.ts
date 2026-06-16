import {Component, input} from ‘@angular/core’;
import {Bottle} from ‘../../models/bottle.model’;
import {BottleStickerImageComponent} from ‘../bottle-sticker-image/bottle-sticker-image.component’;
import {NgClass} from ‘@angular/common’;
import {NotificationService} from ‘../../../../../shared/services/notification.service’;

@Component({
    selector: ‘bottle-tile’,
    templateUrl: ‘./bottle-tile.component.html’,
    imports: [
        BottleStickerImageComponent,
        NgClass
    ],
    styleUrl: ‘./bottle-tile.component.scss’
})
export class BottleTileComponent {
    public bottle = input<Bottle>();

    constructor(private notificationService: NotificationService) {
    }

    public onImageClick(bottle: Bottle): void {
        this.notificationService
            .success(`click sur l’image de la bouteille ${bottle.estate}`);
    }
}

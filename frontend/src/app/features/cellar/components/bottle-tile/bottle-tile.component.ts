import {Component, input, output} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {BottleStickerImageComponent} from '../bottle-sticker-image/bottle-sticker-image.component';
import {NgClass} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'bottle-tile',
    templateUrl: './bottle-tile.component.html',
    imports: [
        BottleStickerImageComponent,
        NgClass,
        TranslatePipe
    ],
    styleUrl: './bottle-tile.component.scss'
})
export class BottleTileComponent {
    public bottle = input<Bottle>();
    public selected = output<Bottle>();

    public select(bottle: Bottle): void {
        this.selected.emit(bottle);
    }
}

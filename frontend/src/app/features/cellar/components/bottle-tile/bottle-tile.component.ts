import {Component, input} from '@angular/core';
import {Bottle} from '../../models/bottle.model';

@Component({
    selector: 'bottle-tile',
    templateUrl: './bottle-tile.component.html',
    styleUrl: './bottle-tile.component.scss'
})
export class BottleTileComponent {
    public bottle = input<Bottle>();
}

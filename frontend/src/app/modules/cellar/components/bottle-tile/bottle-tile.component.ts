import {Component, Input} from '@angular/core';
import {Bottle} from '../../models/bottle.model';

@Component({
    selector: 'bottle-tile',
    templateUrl: './bottle-tile.component.html',
    styleUrl: './bottle-tile.component.scss'
})
export class BottleTileComponent {
    @Input() public bottle?: Bottle;

    public onImageClick(bottle: Bottle): void {
        alert(`click sur l’image de la bouteille ${bottle.estate}`);
    }
}

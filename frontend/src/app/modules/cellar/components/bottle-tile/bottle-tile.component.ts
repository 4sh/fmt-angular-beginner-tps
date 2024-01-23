import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Bottle} from '../../models/bottle.model';

@Component({
    selector: 'bottle-tile',
    templateUrl: './bottle-tile.component.html',
    styleUrl: './bottle-tile.component.scss'
})
export class BottleTileComponent {
    @Input() public bottle?: Bottle;
    @Output() public selected = new EventEmitter<Bottle>();

    public select(bottle: Bottle): void {
        this.selected.emit(bottle);
    }
}

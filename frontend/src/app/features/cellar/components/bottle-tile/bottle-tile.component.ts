import {Component, Input} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'bottle-tile',
    templateUrl: './bottle-tile.component.html',
    imports: [
        NgOptimizedImage,
        NgClass
    ],
    styleUrl: './bottle-tile.component.scss'
})
export class BottleTileComponent {
    @Input() public bottle?: Bottle;
}

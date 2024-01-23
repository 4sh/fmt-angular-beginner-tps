import {Component, Input} from '@angular/core';
import {Bottle, Color} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';

@Component({
    selector: 'bottle-details-page',
    templateUrl: './bottle-details-page.component.html',
    styleUrl: './bottle-details-page.component.scss'
})
export class BottleDetailsPageComponent {
    public Color = Color;
    public bottle?: Bottle;

    constructor(private cellarService: CellarService) {
    }

    @Input()
    public set id(id: string) {
        if (id) {
            this.bottle = this.cellarService.getOneBottleById(id!);
        }
    }
}

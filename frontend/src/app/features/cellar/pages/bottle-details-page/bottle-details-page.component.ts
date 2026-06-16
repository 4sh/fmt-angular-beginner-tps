import {Component, effect, input, signal} from '@angular/core';
import {Bottle, Color} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {RouterLink} from '@angular/router';

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

    constructor(private cellarService: CellarService) {
        effect(() => {
            const id = this.id();
            if (id) {
                this.bottle.set(this.cellarService.getOneBottleById(id));
            }
        });
    }
}

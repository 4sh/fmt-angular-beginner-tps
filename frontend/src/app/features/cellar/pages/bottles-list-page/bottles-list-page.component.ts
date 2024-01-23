import {Component, OnInit} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {RouterLink} from '@angular/router';
import {BottleTileComponent} from '../../components/bottle-tile/bottle-tile.component';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
    imports: [
        RouterLink,
        BottleTileComponent
    ],
    styleUrl: './bottles-list-page.component.scss'
})
export class BottlesListPageComponent implements OnInit {
    public bottles?: Bottle[];

    constructor(private cellarService: CellarService) {
    }

    ngOnInit(): void {
        this.cellarService.getManyBottles()
            .subscribe(bottles => this.bottles = bottles);
    }
}

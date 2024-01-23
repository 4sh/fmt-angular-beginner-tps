import {Component, OnInit} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
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

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Bottle} from '../../models/bottle.model';
import {CellarService} from '../../services/cellar.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'bottles-list-page',
    templateUrl: './bottles-list-page.component.html',
    styleUrl: './bottles-list-page.component.scss'
})
export class BottlesListPageComponent implements OnInit, OnDestroy {
    public bottles: Bottle[] = [];
    public query: string = '';

    private fetchBottlesSubscription?: Subscription;

    constructor(private router: Router,
                private cellarService: CellarService) {
    }

    ngOnInit(): void {
        this.fetchBottlesSubscription = this.cellarService
            .getManyBottles()
            .subscribe(bottles => this.bottles = bottles);
    }

    public edit(bottle: Bottle): void {
        this.router.navigate(['/cellar/bottle', bottle.id, 'details']).then();
    }

    ngOnDestroy(): void {
        this.fetchBottlesSubscription?.unsubscribe();
    }
}

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
    public bottles?: Bottle[];
    private subscription?: Subscription;

    constructor(private router: Router,
                private cellarService: CellarService) {
    }

    ngOnInit(): void {
        this.subscription = this.cellarService
            .getManyBottles()
            .subscribe(bottles => this.bottles = bottles);
    }

    public edit(bottle: Bottle): void {
        this.router.navigate(['/cellar/bottle', bottle.id, 'details']).then();
    }

    public trackByBottleId(index: number, bottle: Bottle): string {
        return bottle.id!;
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}

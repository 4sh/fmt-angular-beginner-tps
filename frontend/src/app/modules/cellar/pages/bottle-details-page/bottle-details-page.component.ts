import {Component, OnDestroy, OnInit} from '@angular/core';
import {CellarService} from '../../services/cellar.service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, Subscription, switchMap} from 'rxjs';
import {Bottle, Color} from '../../models/bottle.model';

@Component({
    selector: 'bottle-details-page',
    templateUrl: './bottle-details-page.component.html',
    styleUrl: './bottle-details-page.component.scss'
})
export class BottleDetailsPageComponent implements OnInit, OnDestroy {
    private bottlesSubscription?: Subscription;
    private bottleSubscription?: Subscription;
    public bottle: Bottle = {id: undefined, estate: '', color: Color.RED, vintage: 2000};

    constructor(private route: ActivatedRoute,
                private router: Router,
                private cellarService: CellarService) {
    }

    ngOnInit(): void {
        this.bottlesSubscription = this.route
            .paramMap
            .pipe(
                filter(map => map.has('id')),
                map(map => map.get('id')),
                switchMap(id => this.cellarService.getOneBottleById(id!))
            )
            .subscribe(bottle => this.bottle = bottle);
    }

    public submit(): void {
        const redirector = () => this.router.navigate(['/cellar']);
        if (this.bottle.id) {
            this.bottleSubscription = this.cellarService
                .updateOneBottle(this.bottle)
                .subscribe(redirector);
        } else {
            this.bottleSubscription = this.cellarService
                .createOneBottle(this.bottle)
                .subscribe(redirector);
        }
    }

    ngOnDestroy(): void {
        this.bottlesSubscription?.unsubscribe();
        this.bottleSubscription?.unsubscribe();
    }
}

import {Component, Input, OnDestroy} from '@angular/core';
import {CellarService} from '../../services/cellar.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Bottle, Color} from '../../models/bottle.model';
import {NotificationService} from '../../../../../shared/services/notification.service';

@Component({
    selector: 'bottle-details-page',
    templateUrl: './bottle-details-page.component.html',
    styleUrl: './bottle-details-page.component.scss'
})
export class BottleDetailsPageComponent implements OnDestroy {
    public Color = Color;
    public bottle: Bottle = {id: undefined, estate: '', color: Color.RED, vintage: 2000};
    public vintageMaxYear: number = new Date().getFullYear();

    private fetchBottleSubscription?: Subscription;
    private saveBottleSubscription?: Subscription;

    constructor(private router: Router,
                private notificationService: NotificationService,
                private cellarService: CellarService) {
    }

    @Input()
    public set id(id: string) {
        if (id) {
            this.fetchBottleSubscription = this.cellarService
                .getOneBottleById(id)
                .subscribe(bottle => {
                    if (bottle === undefined) {
                        this.notificationService.error('bottle.get.error');
                        this.router.navigate(['/']).then();
                    } else {
                        this.bottle = bottle;
                    }
                });
        }
    }

    public saveBottle(): void {
        const onAfterSave = () => {
            this.notificationService.success('bottle.save.success');
            this.redirectToList();
        };
        if (this.bottle.id) {
            this.saveBottleSubscription = this.cellarService
                .updateOneBottle(this.bottle)
                .subscribe(onAfterSave);
        } else {
            this.saveBottleSubscription = this.cellarService
                .createOneBottle(this.bottle)
                .subscribe(onAfterSave);
        }
    }

    public cancel(): void {
        this.redirectToList();
    }

    private redirectToList(): void {
        this.router.navigate(['/cellar/list'])
            .then();
    }

    ngOnDestroy(): void {
        this.fetchBottleSubscription?.unsubscribe();
        this.saveBottleSubscription?.unsubscribe();
    }
}

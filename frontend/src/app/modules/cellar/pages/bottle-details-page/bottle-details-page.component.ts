import {Component, Input, OnDestroy} from '@angular/core';
import {CellarService} from '../../services/cellar.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Bottle, Color} from '../../models/bottle.model';
import {ToastService} from "../../../../../shared/services/toast.service";

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
                private toastService: ToastService,
                private cellarService: CellarService) {
    }

    @Input()
    public set id(id: string) {
        if (id) {
            this.cellarService
                .getOneBottleById(id!)
                .subscribe(bottle => this.bottle = bottle);
        }
    }

    public saveBottle(): void {
        const onAfterSave = () => {
            this.toastService.success('bottle.createOrUpdate.success');
            this.router.navigate(['/cellar']);
        }
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

    ngOnDestroy(): void {
        this.fetchBottleSubscription?.unsubscribe();
        this.saveBottleSubscription?.unsubscribe();
    }
}

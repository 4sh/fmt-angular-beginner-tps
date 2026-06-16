import {Component, effect, input, OnDestroy} from '@angular/core';
import {CellarService} from '../../services/cellar.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Bottle, Color} from '../../models/bottle.model';
import {NotificationService} from '../../../../../shared/services/notification.service';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {KeyValuePipe} from '@angular/common';

@Component({
    selector: 'bottle-details-page',
    templateUrl: './bottle-details-page.component.html',
    imports: [
        TranslatePipe,
        FormsModule,
        KeyValuePipe
    ],
    styleUrl: './bottle-details-page.component.scss'
})
export class BottleDetailsPageComponent implements OnDestroy {
    public Color = Color;
    public bottle: Bottle = {id: undefined, estate: '', color: Color.RED, vintage: 2000};

    public id = input<string>();

    private saveBottleSubscription?: Subscription;

    constructor(private router: Router,
                private notificationService: NotificationService,
                private cellarService: CellarService) {
        effect((onCleanup) => {
            const id = this.id();
            if (id) {
                const sub = this.cellarService
                    .getOneBottleById(id)
                    .subscribe(bottle => {
                        if (bottle === undefined) {
                            this.notificationService.error('La bouteille a été retirée de la cave');
                        } else {
                            this.bottle = bottle;
                        }
                    });
                onCleanup(() => sub.unsubscribe());
            }
        });
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
        this.saveBottleSubscription?.unsubscribe();
    }
}

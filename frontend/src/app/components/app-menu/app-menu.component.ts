import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../modules/auth/services/auth.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './app-menu.component.html',
    styleUrl: './app-menu.component.scss'
})
export class AppMenuComponent implements OnInit, OnDestroy {
    private currentUserSubscription?: Subscription;
    public isLoggedIn?: boolean;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
        this.currentUserSubscription = this.authService
            .getCurrentUserIdentity()
            .subscribe(identity => this.isLoggedIn = identity !== undefined);
    }

    ngOnDestroy(): void {
        this.currentUserSubscription?.unsubscribe();
    }
}

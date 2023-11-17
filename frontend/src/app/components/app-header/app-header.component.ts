import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserIdentity} from '../../modules/auth/models/session.model';
import {AuthService} from '../../modules/auth/services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent implements OnInit, OnDestroy {
    public currentUserIdentity?: UserIdentity;
    private currentUserSubscription?: Subscription;
    private logoutSubscription?: Subscription;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.currentUserSubscription = this.authService
            .getCurrentUserIdentity()
            .subscribe(identity => this.currentUserIdentity = identity);
    }

    public logout(): void {
        this.logoutSubscription = this.authService
            .logout()
            .subscribe(() => this.router.navigate(['/auth']));
    }

    ngOnDestroy(): void {
        this.currentUserSubscription?.unsubscribe();
        this.logoutSubscription?.unsubscribe();
    }
}

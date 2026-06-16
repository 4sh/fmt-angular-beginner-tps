import {UserIdentityPipe} from '../../features/auth/pipes/user-identity.pipe';
import {RouterLink} from '@angular/router';
import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserIdentity} from '../../features/auth/models/session.model';
import {AuthService} from '../../features/auth/services/auth.service';
import {AppLocalePickerComponent} from '../app-locale-picker/app-locale-picker.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
    imports: [
        RouterLink,
        UserIdentityPipe,
        AppLocalePickerComponent,
        TranslatePipe
    ],
    standalone: true
})
export class AppHeaderComponent implements OnInit, OnDestroy {
    public currentUserIdentity = signal<UserIdentity | undefined>(undefined);
    private currentUserSubscription?: Subscription;
    private logoutSubscription?: Subscription;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.currentUserSubscription = this.authService
            .getCurrentUserIdentity()
            .subscribe(identity => this.currentUserIdentity.set(identity));
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

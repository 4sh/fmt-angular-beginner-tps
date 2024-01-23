import {Component, OnDestroy} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {NotificationService} from '../../../../../shared/services/notification.service';
import {UserIdentityPipe} from '../../pipes/user-identity.pipe';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnDestroy {
    public login?: string;
    public password?: string;
    private subscription?: Subscription;

    constructor(private authService: AuthService,
                private router: Router,
                private notificationService: NotificationService,
                private userIdentityPipe: UserIdentityPipe) {
    }

    public authenticate(): void {
        this.subscription = this.authService
            .login(this.login!, this.password!)
            .subscribe({
                next: userIdentity => {
                    this.notificationService.success('auth.submit.success', {
                        username: this.userIdentityPipe.transform(userIdentity)
                    });
                    this.router.navigate(['/cellar']);
                },
                error: _ => this.notificationService.error('auth.submit.error')
            });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}

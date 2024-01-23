import {Component, OnDestroy} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

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
                private router: Router) {
    }

    public authenticate(): void {
        this.subscription = this.authService
            .login(this.login!, this.password!)
            .subscribe({
                next: _ => this.router.navigate(['/cellar']),
                error: _ => console.error('auth.submit.error')
            });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}

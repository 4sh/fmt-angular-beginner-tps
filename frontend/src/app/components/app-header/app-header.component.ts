import {UserIdentityPipe} from '../../features/auth/pipes/user-identity.pipe';
import {RouterLink} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService, OptionalUserIdentity} from '../../features/auth/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
    imports: [
        RouterLink,
        UserIdentityPipe
    ],
    standalone: true
})
export class AppHeaderComponent implements OnInit{
    public currentUserIdentity: OptionalUserIdentity;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.authService.getCurrentUserIdentity()
            .subscribe(currentUserIdentity => this.currentUserIdentity = currentUserIdentity);
    }

    public logout(): void {
        this.authService
            .logout()
            .subscribe(() => this.router.navigate(['/auth']));
    }
}

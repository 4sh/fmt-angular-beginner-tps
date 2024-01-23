import {Component, OnInit} from '@angular/core';
import {AuthService, OptionalUserIdentity} from '../../modules/auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss'
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

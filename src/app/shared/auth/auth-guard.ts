import { AuthService } from './auth.service';
import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private loggedIn: boolean;
    constructor(private authService: AuthService, private router: Router) {
        this.authService.isLoggedIn.subscribe(value => {
            this.loggedIn = value;
        });
    }

    canActivate() {
        if (this.loggedIn) {
            return true;
        }

        this.authService.confirm();

        // navigate to login page
        // this.router.navigate(['/']);
        // you can save redirect url so after authing we can move them back to the page they requested
        return true;
    }
}

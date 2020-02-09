import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from '../../user/services/user.service';

@Injectable({
    providedIn: 'root'
})
export class LogInGuard implements CanActivate {
    constructor(private userService: UserService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('Can this user access page?', UserService.session.isLoggedIn);
        return UserService.session.isLoggedIn;
    }

}

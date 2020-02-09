import {Injectable} from '@angular/core';
import {Session} from '../interfaces/session';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private static innerSession: Partial<Session> = {
        isLoggedIn: true,
        username: 'Diangos'
    };

    static get session() {
        return UserService.innerSession;
    }

    static set session(newValue) {
        // We don't want anything outside of this class to be able to change the session
        if (!(this instanceof UserService)) {
            return;
        }

        UserService.innerSession = newValue;
    }

    private loggedIn = false;

    set isLoggedIn(value: boolean) {
        this.loggedIn = value;
    }

    get isLoggedIn() {
        return this.loggedIn;
    }

    constructor() {
    }

    public logIn() {
        this.isLoggedIn = true;
    }

    public logOut() {
        UserService.session.username = '';
        UserService.session.isLoggedIn = false;
    }
}

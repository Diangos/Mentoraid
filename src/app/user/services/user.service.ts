import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
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
        this.isLoggedIn = false;
    }
}

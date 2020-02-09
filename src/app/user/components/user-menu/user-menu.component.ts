import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Session} from '../../interfaces/session';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    public currentSession: Partial<Session>;

    constructor(private userService: UserService) {
        this.currentSession = UserService.session;
        UserService.session = {};
    }

    ngOnInit() {
    }

    logout() {
        this.userService.logOut();
    }
}

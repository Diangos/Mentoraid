import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', './../user.common.scss']
})
export class LoginComponent implements OnInit {

    userProfileForm = this.formBuilder.group({
        email: [''],
        userPassword: [''],
        rememberMe: [true]
    });

    constructor(private formBuilder: FormBuilder,
                private userService: UserService) {
    }

    ngOnInit() {

    }

    onSubmit() {
        console.warn(this.userProfileForm);
    }

    login() {
        this.userService.logIn();
    }

}




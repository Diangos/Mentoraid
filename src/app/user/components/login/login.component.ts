import {Component, OnInit} from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    title: string = "Member Login";

    userProfileForm = this.formBuilder.group({
        userName: [''],
        userPassword: [''],
        rememberMe: [true]


    });

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
          
    }

    onSubmit(){
        console.warn(this.userProfileForm);
    }

}

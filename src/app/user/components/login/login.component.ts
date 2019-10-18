import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';


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

    constructor(private formBuilder: FormBuilder,
                private userService : UserService) {
    }

    ngOnInit() {
          
    }

    onSubmit(){
        console.warn(this.userProfileForm);
    }

    login(){
        console.log(this.userProfileForm.value)
        this.userService.logIn();
    }

}




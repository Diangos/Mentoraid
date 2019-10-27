import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss', './../user.common.scss']
})
export class RegisterComponent implements OnInit {
    technologies: any = ['Java', 'JavaScript', 'HTML', 'SCSS'];

    registerProfileForm = this.fb.group({
        fullName: [''],
        userName: [''],
        email: [''],
        password: [''],
        confirmPassword: [''],
        technologyIntrestedIn: ['']
    });

    constructor(private fb: FormBuilder,
                private location: Location) {
    }

    ngOnInit() {
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.registerProfileForm);
        alert(JSON.stringify(this.registerProfileForm.value));
    }

    goBack() {
        this.location.back();
    }
}

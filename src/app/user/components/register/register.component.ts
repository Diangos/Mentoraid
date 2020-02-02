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

    registerProfileForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        password: [''],
        confirmPassword: [''],
        technologyInterestedIn: ['']
    });

    constructor(private formBuilder: FormBuilder,
                private location: Location) {
    }

    ngOnInit() {
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        alert(JSON.stringify(this.registerProfileForm.value));
    }
}

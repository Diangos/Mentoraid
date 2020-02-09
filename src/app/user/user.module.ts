import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
    declarations: [DashboardComponent, LoginComponent, RegisterComponent, UserMenuComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule
    ],
    exports: [
        UserMenuComponent
    ]
})
export class UserModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DashboardComponent, LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
})
export class UserModule {
}

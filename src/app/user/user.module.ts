import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
    declarations: [DashboardComponent, LoginComponent],
    imports: [
        CommonModule
    ],
})
export class UserModule {
}

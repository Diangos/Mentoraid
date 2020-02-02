import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardMembersComponent } from './components/dashboard/dashboard-members/dashboard-members.component';
import { DashboardMessagesComponent } from './components/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardAnalyticsComponent } from './components/dashboard/dashboard-analytics/dashboard-analytics.component';
import { DashboardTechnologyComponent } from './components/dashboard/dashboard-technology/dashboard-technology.component';

@NgModule({
    declarations: [DashboardComponent, LoginComponent, RegisterComponent, DashboardMembersComponent, DashboardMessagesComponent, DashboardAnalyticsComponent, DashboardTechnologyComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule
    ],
})
export class UserModule {
}

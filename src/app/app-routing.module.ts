import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogInGuard} from './shared/guards/log-in.guard';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {LoginComponent} from './user/components/login/login.component';
import {DashboardComponent} from './user/components/dashboard/dashboard.component';
//import {HomeComponent} from './home/components/home/home.component';
import {RegisterComponent} from './user/components/register/register.component';
import { DashboardMembersComponent } from './user/components/dashboard/dashboard-members/dashboard-members.component';
import { DashboardMessagesComponent } from './user/components/dashboard/dashboard-messages/dashboard-messages.component';
import { DashboardAnalyticsComponent } from './user/components/dashboard/dashboard-analytics/dashboard-analytics.component';
import { DashboardTechnologyComponent } from './user/components/dashboard/dashboard-technology/dashboard-technology.component';


const routes: Routes = [{
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LogInGuard],
    children: [
        {
            path: '',
            component: DashboardMembersComponent,
            pathMatch: 'full'
    }, {
            path: 'members',
            component: DashboardMembersComponent,
    },{
            path: 'messages',
            component: DashboardMessagesComponent,
    },{
            path: 'analytics',
            component: DashboardAnalyticsComponent,
    },{
        path: 'technology',
        component: DashboardTechnologyComponent,
    }]
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes),
              RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

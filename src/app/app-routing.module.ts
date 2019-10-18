import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogInGuard} from './shared/guards/log-in.guard';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {LoginComponent} from './user/components/login/login.component';
import {DashboardComponent} from './user/components/dashboard/dashboard.component';
import {RegisterComponent} from './user/components/register/register.component';


const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LogInGuard]
}, {
    path: 'register',
    component: RegisterComponent
}, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
}, {
    path: '**',
    component: PageNotFoundComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}



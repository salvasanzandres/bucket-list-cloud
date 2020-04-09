import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SignInComponent} from './pages/sign-in/sign-in.component';
import {AuthGuard} from './core/guard/auth.guard';
import {InnerGuard} from './core/guard/inner.guard';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [
    {path: 'signin', component: SignInComponent, canActivate: [InnerGuard]},
    {path: 'search', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: 'signin', pathMatch: 'full'},
    {path: '**', component: SignInComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}




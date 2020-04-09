import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SignInComponent} from './sign-in/sign-in.component';
import {UiModule} from '../ui/ui.module';
import { HomeComponent } from './home/home.component';



@NgModule({
    declarations: [SignInComponent, HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UiModule
    ]
})
export class PagesModule {
}

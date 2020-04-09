import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';

import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {UiModule} from './ui/ui.module';
import {environment} from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment),
        AngularFireAuthModule,
        AngularFirestoreModule,
        PagesModule,
        AppRoutingModule,
        UiModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

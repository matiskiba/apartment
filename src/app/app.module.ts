import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProcessYad2Component} from './popups/process-yad2.component';
import {MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatSliderModule} from '@angular/material';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProcessYad2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
      MatSliderModule,
      MatInputModule,
      MatSelectModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeHuyxXBY6fhmaSclMQ0pU8lWLRpxJUng'
    })
  ],
  entryComponents:[
    ProcessYad2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

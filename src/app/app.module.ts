import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AvatarModule } from 'ngx-avatar';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CreatePacketDialogComponent } from './dialogs/create-packet-dialog/create-packet-dialog.component';


const config = {
  apiKey: "AIzaSyBNvhfsb-selMCQjromoXQd8YZzUGLCPiI",
  authDomain: "sourcesta.firebaseapp.com",
  databaseURL: "https://sourcesta.firebaseio.com",
  projectId: "sourcesta",
  storageBucket: "sourcesta.appspot.com",
  messagingSenderId: "938730105265",
  appId: "1:938730105265:web:c52ea7ae4774fed9a7b590"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CreatePacketDialogComponent,
    CreatePacketDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AvatarModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

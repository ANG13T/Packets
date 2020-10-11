import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  user$ : Observable<any>;
  name: String;
  photoURL: String;
  email: String;
  uid:String;
  loading: boolean;


  constructor(public auth: AuthService, private _router: Router){
    this.loading = true;
    this.auth.user$.subscribe(async (userProfile) => {
      if(!userProfile){
        this.loading = false;
        return;
      }

      this.name = userProfile.name;
      this.photoURL = userProfile.photoURL;
      this.uid = userProfile.uid;
      this.email = userProfile.email;
      this.loading = false;
    })
  }

  signOut(){
    this.auth.signOut();
  }

  async googleSignUp(){
    await this.auth.googleSignin();
  }


}

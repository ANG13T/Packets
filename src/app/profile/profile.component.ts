import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePacketDialogComponent } from '../dialogs/create-packet-dialog/create-packet-dialog.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  uid:String;


  constructor(private dialog: MatDialog, private auth: AuthService, private router: Router)  {
    this.auth.user$.subscribe(async (userProfile) => {
      if(!userProfile){
        router.navigate(['/']);
        return;
      }

      this.uid = userProfile.uid;
    })
   }

  openFileDialog(){
    const dialogRef = this.dialog.open(CreatePacketDialogComponent, {
      data: {
        uid: this.uid
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); //if new packet reload else dont reload
    });
  }

}

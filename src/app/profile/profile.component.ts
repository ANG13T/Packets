import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePacketDialogComponent } from '../dialogs/create-packet-dialog/create-packet-dialog.component';
import { AuthService } from '../services/auth.service';
import { Packet } from '../models/packet.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  uid:String;
  profilePackets: Packet[] = [];


  constructor(private dialog: MatDialog, private auth: AuthService, private router: Router, private afs: AngularFirestore)  {
    this.auth.user$.subscribe(async (userProfile) => {
      if(!userProfile){
        router.navigate(['/']);
        return;
      }

      this.uid = userProfile.uid;
    })
   }

   ngOnInit(){
    this.afs.collection('packets').where('userId', '==', this.uid).limit(10).get().then(querySnapshot =>{
      if (querySnapshot.empty) {
        console.log('no data found');
      }else{
        querySnapshot.forEach(documentSnapshot => {
          this.profilePackets.push(documentSnapshot);
        }
      }
    });
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

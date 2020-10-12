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
  username: String;
  profilePackets: Packet[] = [];


  constructor(private dialog: MatDialog, private auth: AuthService, private router: Router, private afs: AngularFirestore)  {
  }

   ngOnInit(){
    this.auth.user$.subscribe(async (userProfile) => {
      if(!userProfile){
        console.log("not logged in");
        this.router.navigate(['/']);
        return;
      }

      this.uid = userProfile.uid;
      console.log("uid: " + this.uid);
      this.username = userProfile.name;
      this.afs.firestore.collection('packets').where('userId', '==', this.uid).limit(10).get().then(querySnapshot =>{
        if (querySnapshot.empty) {
          console.log('no data found');
        }else{
          querySnapshot.forEach(documentSnapshot => {
            let newPacket = {
              uid: documentSnapshot.id,
              title: documentSnapshot.data().title,
              username: documentSnapshot.data().username,
              packetAmount: documentSnapshot.data().packetAmount
            } as Packet;
            this.profilePackets.push(newPacket);
          })
        }
      });
    });
   }

  openFileDialog(){
    const dialogRef = this.dialog.open(CreatePacketDialogComponent, {
      data: {
        userUID: this.uid,
        username: this.username
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); //if new packet reload else dont reload
    });
  }

}

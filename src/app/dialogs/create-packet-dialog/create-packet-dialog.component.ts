import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-packet-dialog',
  templateUrl: './create-packet-dialog.component.html',
  styleUrls: ['./create-packet-dialog.component.scss']
})
export class CreatePacketDialogComponent implements OnInit {
  title:String;
  constructor(private afs: AngularFirestore, private auth: AuthService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CreatePacketDialogComponent>) { }

  ngOnInit(): void {
  }

  createPacket(){
    this.afs.firestore.collection('packets').add({
      uid: this.data.uid,
      title: this.title
    }).catch(err => {
      console.log(err);
      this.dialogRef.close('error');
    }
  ).then(() => {
      this.dialogRef.close('success');
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-actuators',
  templateUrl: './actuators.component.html',
  styleUrls: ['./actuators.component.css']
})
export class ActuatorsComponent implements OnInit {
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog .open(PopUpComponent);
  }

}

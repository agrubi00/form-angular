import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {ItemService} from '../itemService';
import { Router } from '@angular/router';
import{Item} from '../item';
import { ITEMS } from '../items';
import { __values } from 'tslib';
import { MatDialogRef } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



interface Group {
  name: string;
}


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})
export class PopUpComponent implements OnInit {

  isSelected = false;
  items = ITEMS;

 
  nameFormControl = new FormControl('')
  groupControl = new FormControl<Group | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  groups: Group[] = [
    {name: 'group1'},
    {name: 'group2'},
    {name: 'group3'},
    {name: 'group4'},
  ];


  submit = false;
  dashboard = true;
select = true;




  constructor(private itemService: ItemService, private router: Router, private fb: FormBuilder, public dialogRef: MatDialogRef<PopUpComponent>,){ }

  ngOnInit() {
      this.items = this.itemService.items;

  }

  getItems(){
    this.itemService.items;
  }

  selectedGroup= '';
	onSelected(value:any){
		this.selectedGroup = value;
	}

  
 onSubmit(e) {
    if(e) {e.preventDefault()
    this.itemService.createItem(
      this.nameFormControl.value as string,
      0,
      this.selectedGroup,

    )
     if (this.dashboard){
      this.getItems();

    this.router.navigate(['/home/dashboard'])
  }    


  else if (!this.dashboard){

    this.router.navigate(['/home/graphs'])

  }
  }

    this.dialogRef.close()

  }



 
}
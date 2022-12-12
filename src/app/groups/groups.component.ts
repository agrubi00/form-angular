import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ItemService } from '../itemService'
import { Item } from '../item'
import { __values } from 'tslib';




interface Group {
  name: string;
}
@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {


  items: Item[] = []

  constructor(private itemService: ItemService) { }

  groups: Group[] =
    [{ name: 'group1' },
    { name: 'group2' },
    { name: 'group3' },
    { name: 'group4' }
    ];


  newGroup = [{}] as any


  ngOnInit() {
    this.items = this.itemService.items;

    console.log(this.items)
    console.log(this.groups)
    
   this.newGroup = this.grouping(this.items, this.groups)
  
    console.log(this.newGroup)
  }

   grouping(actuators, groups) {
     return groups
       .map((group) => {
         return actuators
           .filter(actuators => actuators.group === group.name)
       });
   }

}

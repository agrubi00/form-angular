import { Injectable } from '@angular/core';
import { Item } from './item';
import { interval, Observable, of } from 'rxjs';
import { ITEMS } from './items';
import { DialogModule } from '@angular/cdk/dialog';



@Injectable({ providedIn: 'root' })


export class ItemService {

  /**
   *
   */
  constructor() {
   
  }

  public items: Item[] = [
    { name: 'Actuator1',value: 22, group:'group2' },
    { name: 'Actuator2',value: 48,  group:'group2'  },
    { name: 'Actuator3',value: 17,  group:'group2'  },
    { name: 'Actuator4',value: 5,  group:'group4'  }
  ];

  // getItems(): Observable<Item[]> {
  //   const items = of(ITEMS);
  //   return items;
  // }
 

  createItem(itemName: string, itemValue: number, itemGroup: string) {
    if (itemName.length !== 0) {
      const itemObj = { name: itemName, value: itemValue, group: itemGroup };
      this.items.push(itemObj);
    }
  }
  

  getItems(){
    return this.items;
  }
  }

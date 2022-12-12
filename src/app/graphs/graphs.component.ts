import { Component, OnInit } from '@angular/core';
import { ItemService } from '../itemService';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  items: Item [] = []
  constructor( private itemService: ItemService,  private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    
    this.items = this.itemService.getItems()
    console.log(this.items)
  }

  


}

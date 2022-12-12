import { Component, OnInit } from '@angular/core';
import { ItemService } from '../itemService';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item [] = []
  constructor( private itemService: ItemService,  private route: ActivatedRoute, private location: Location) { }


dashboard = true


  ngOnInit() {
    
    this.items = this.itemService.getItems();
    console.log(this.items)
  }



 }




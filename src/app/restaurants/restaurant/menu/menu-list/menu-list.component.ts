import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  public menu_list: MenuItem[] = [
    new MenuItem('Ludowy kąsek', 13, 'Bardzo dobry każdy się naje', 'składniki'),
    new MenuItem('Ludowy kąsek2', 13, 'Bardzo dobry każdy się naje', 'składniki'),
    new MenuItem('Ludowy kąsek3', 13, 'Bardzo dobry każdy się naje', 'składniki')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

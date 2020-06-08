import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  menu_list = ['Śniadanie', 'Obiad', 'Deser', 'Kolacja'];
  constructor() { }

  ngOnInit(): void {
  }

}

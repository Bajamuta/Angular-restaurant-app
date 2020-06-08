import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  restaurants: Restaurant[] = [
    new Restaurant('Warszawa', 'Restauracja w Warszawie', 'https://www.pexels.com/photo/top-view-of-food-1640772/')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

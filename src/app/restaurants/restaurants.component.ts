import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  @Input() restaurants: Restaurant[] = [
    new Restaurant('Warszawa', 'Restauracja w Warszawie', 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg'),
    new Restaurant('Wrocław', 'Restauracja we Wrocławiu', 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg'),
    new Restaurant('Gdańsk', 'Restauracja w Gdańsku', 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

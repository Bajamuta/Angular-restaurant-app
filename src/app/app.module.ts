import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { MenuComponent } from './restaurants/restaurant/menu/menu.component';
import { MenuItemComponent } from './restaurants/restaurant/menu/menu-item/menu-item.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { MenuListComponent } from './restaurants/restaurant/menu/menu-list/menu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    MenuItemComponent,
    HeaderComponent,
    RestaurantsListComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

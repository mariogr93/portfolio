import React from "react";
import { Switch, Route } from "react-router-dom";

import HeaderRestaurant from "./Header.restaurant.component";
import OrderCart from "./OrderCart.restaurant.component";
import Menu from "./Menu.restaurant.component";
import RestaurantLocation from "./Location.restaurant.component";
import FrontPage from "./FrontPage.restaurant.component";

const HomePageRestaurant = () => (
  <div>
    <div>
      <HeaderRestaurant />
      <div className="restaurant-homepage">
        <Switch>
          <Route path="/restaurant" component={FrontPage} />
          <Route exact path="/restaurant/order-cart" component={OrderCart} />
          <Route exact path="/restaurant/menu" component={Menu} />
          <Route
            exact
            path="/restaurant/location"
            component={RestaurantLocation}
          />
        </Switch>
      </div>
    </div>
  </div>
);

export default HomePageRestaurant;

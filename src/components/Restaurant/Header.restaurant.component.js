import React from "react";
import { Link } from "react-router-dom";

import MyRest from "./Name.restaurant.component";

const HeaderRestaurant = () => (
  <div>
    <Link to="/restaurant">
      <MyRest nameRestaurant={"<Marios-Restaurant/>"} />
    </Link>

    <div className="restaurant-options">
      <Link className='restaurant-option' to='/restaurant/order-cart'>
        Order Cart
      </Link>
      <Link className="restaurant-option" to="/restaurant/menu">
        Menu
      </Link>

      <Link className="restaurant-option" to="/restaurant/location">
        Location
      </Link>
    </div>
  </div>
);

export default HeaderRestaurant;

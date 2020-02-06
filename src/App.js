import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Carouselhome from "./components/Carouselhome";
import Membershipmenu from "./components/Membershipmenu";
import Category from "./components/Category";
import Restaurantcarousel from "./components/Restaurantcarousel";
import RestaurantMenu from "./components/RestaurantMenu";
import Allrestaurants from "./components/Allrestaurants";

import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/restaurants" />
        <Route path="/restaurants" exact>
          <Carouselhome />
          <Membershipmenu />
          <Category />
          <Allrestaurants />
        </Route>
        <Route path="/restaurants/:rname">
          <Restaurantcarousel />
          <RestaurantMenu />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import React, { Component } from "react";

import burger from "../images/burger.jpeg";

import Restaurantcart from "./Restaurantcart";
import Restaurantmobilecart from "./Restaurantmobilecart";

class RestaurantMenu extends Component {
  render() {
    return (
      <section className="cart">
        <div className="container">
          <div className="row menu-items">
            <h2>Recommended</h2>
            <p>15 ITEMS</p>
          </div>
          <div className="row">
            <div className="itemsList">
              <div className="item-data_cards">
                {/* Single Card */}
                <div className="card-container">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src={burger}
                        alt="burger"
                        width="250px"
                        height="160px"
                      />
                    </div>
                    <div className="card-title">
                      <h3>Chicken Burger</h3>
                      <p>Burger</p>
                    </div>
                    <div className="card-details">
                      <div className="price">₹ 110</div>
                      <div className="add-cart-btn">
                        <button className="btn-white">ADD</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Card */}
                <div className="card-container">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src={burger}
                        alt="burger"
                        width="250px"
                        height="160px"
                      />
                    </div>
                    <div className="card-title">
                      <h3>Chicken Burger</h3>
                      <p>Burger</p>
                    </div>
                    <div className="card-details">
                      <div className="price">₹ 110</div>
                      <div className="add-cart-btn">
                        <button className="btn-white">ADD</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src={burger}
                        alt="burger"
                        width="250px"
                        height="160px"
                      />
                    </div>
                    <div className="card-title">
                      <h3>Chicken Burger</h3>
                      <p>Burger</p>
                    </div>
                    <div className="card-details">
                      <div className="price">₹ 110</div>
                      <div className="add-cart-btn">
                        <button className="btn-white">ADD</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src={burger}
                        alt="burger"
                        width="250px"
                        height="160px"
                      />
                    </div>
                    <div className="card-title">
                      <h3>Chicken Burger</h3>
                      <p>Burger</p>
                    </div>
                    <div className="card-details">
                      <div className="price">₹ 110</div>
                      <div className="add-cart-btn">
                        <button className="btn-white">ADD</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-container">
                  <div className="card">
                    <div className="card-img">
                      <img
                        src={burger}
                        alt="burger"
                        width="250px"
                        height="160px"
                      />
                    </div>
                    <div className="card-title">
                      <h3>Chicken Burger</h3>
                      <p>Burger</p>
                    </div>
                    <div className="card-details">
                      <div className="price">₹ 110</div>
                      <div className="add-cart-btn">
                        <button className="btn-white">ADD</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Restaurantcart />
          </div>
          <Restaurantmobilecart />
        </div>
      </section>
    );
  }
}
export default RestaurantMenu;

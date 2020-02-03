import React, { Component } from "react";

class Restaurantmobilecart extends Component {
  render() {
    return (
      <div className="cart-mobile">
        <div className="cart-mobile-details">
          <div className="cart-item">1 Item</div>
          <div className="cart-price">₹ 345</div>
          <div>From The Bowl Company</div>
        </div>
        <div className="cart-mobile-btn">View Cart &rarr;</div>
      </div>
    );
  }
}
export default Restaurantmobilecart;

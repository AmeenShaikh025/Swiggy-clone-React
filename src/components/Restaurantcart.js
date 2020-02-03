import React, { Component } from "react";

class Restaurantcart extends Component {
  render() {
    return (
      <div className="cart-info">
        <h2>Cart</h2>
        <p>From The Bowl Company</p>
        <p>1 Item</p>
        <div className="cart-counter">
          <div className="cart-item-name">Build Your 2 Bowl Combo</div>
          <div className="cart-counter-btn">
            <div className="btn-white">
              <div>+</div>
              <div>1</div>
              <div>-</div>
            </div>
          </div>
          <div className="cart-item-price">₹ 345</div>
        </div>
        <div className="subtotal">
          <div>
            <p>Subtotal</p>
            <p>Extra charges may apply</p>
          </div>
          <div>₹ 345</div>
        </div>
        <button className="btn-green">Checkout &rarr;</button>
      </div>
    );
  }
}
export default Restaurantcart;

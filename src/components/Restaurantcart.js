import React, { Component } from "react";
import shortid from "shortid";

class Restaurantcart extends Component {
  render() {
    const {
      cart,
      add,
      remove,
      total,
      currItemPrice,
      currentItemId
    } = this.props;
    //console.log(cart);

    const totalItems = Object.values(cart).reduce((acc, cur) => {
      return (acc += cur);
    }, 0);

    const cartItems = Object.entries(cart).map(([k, v]) => {
      // console.log(k);
      const cartItem = k;
      let currPrice;
      let currentId;
      if (v > 0) {
        return (
          <div className="cart-counter" key={shortid.generate()}>
            <div className="cart-item-name">{k}</div>
            <div className="cart-counter-btn">
              <div className="btn-white">
                {Object.entries(currentItemId).map(([key, val]) => {
                  if (cartItem === key) {
                    currentId = val;
                  }
                })}
                <div onClick={() => remove(k, currentId)}>-</div>
                <div>{v}</div>
                <div onClick={() => add(k, currentId)}>+</div>
              </div>
            </div>
            {Object.entries(currItemPrice).map(([k, v]) => {
              if (cartItem === k) {
                currPrice = v;
              }
            })}
            <div className="cart-item-price">₹ {currPrice}</div>
          </div>
        );
      }
    });

    return (
      <>
        {Object.keys(cart).length === 0 &&
        cart.constructor === Object ? null : (
          <div className="cart-info">
            <h2>Cart</h2>
            {/* <p>From The Bowl Company</p> */}
            <p>{totalItems} Item</p>

            <div
              className={
                Object.keys(cart).length >= 3 && cart.constructor === Object
                  ? "carItems"
                  : "carItems-noscroll"
              }
            >
              {cartItems}
            </div>

            <div className="subtotal">
              <div>
                <p>Subtotal</p>
                <p>Extra charges may apply</p>
              </div>
              <div>₹ {total}</div>
            </div>
            <button className="btn-green">Checkout &rarr;</button>
          </div>
        )}
      </>
    );
  }
}
export default Restaurantcart;

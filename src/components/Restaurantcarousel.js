import React, { Component } from "react";

import burger from "../images/burger.jpeg";

class Restaurantcarousel extends Component {
  render() {
    return (
      <>
        <section className="restaurant-cta">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={burger} alt="burger" width="225" height="145" />
              </div>
              <div className="col-md-5">
                <h2>Krispy Kreme</h2>
                <p>Desserts</p>
                <p>Intermediate Ring Road, Koramangala</p>
                <div className="restaurant-info">
                  <div className="ratings">
                    <div>
                      <span className="rating-icon"> &#9733; </span>
                      <span className="rating-value"> 4.1 </span>
                    </div>
                    <div>100 + Ratings</div>
                  </div>
                  <div className="delivery">
                    <div>23 mins</div>
                    <div>Delivery Time</div>
                  </div>
                  <div className="cost">
                    <div>₹ 170</div>
                    <div>Cost for two</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="offer-div">
                  <h3>offer</h3>
                  <p>40% off on all orders on select categories</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Restaurantcarousel;

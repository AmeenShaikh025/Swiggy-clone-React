import React, { Component } from "react";

import burger from "../images/burger.jpeg";

import { Link } from "react-router-dom";

class Categorydata extends Component {
  render() {
    const { items } = this.props;

    const restaurant = items.map(item => {
      const ratingColor =
        item.avgRating > 4 ? "rating-container" : "rating-container-red";
      return (
        <div className="card-container" key={item.id}>
          <Link to={`/restaurants/${item.id}`}>
            <div className="card">
              <div className="card-img">
                <img src={burger} alt="burger" width="250px" height="160px" />
              </div>
              <div className="card-title">
                <h3>{item.name}</h3>
                <p>{item.address}</p>
              </div>
              <div className="card-details">
                <div className="rating">
                  <div className={ratingColor}>
                    <span className="rating-star">&#9733;</span>
                    <span className="rating-value">{item.avgRating}</span>
                  </div>
                </div>
                <div className="prep-time">{item.deliveryTime} MINS</div>
                <div className="price">
                  ₹ {item.costForTwo.toString().slice(0, -2)} for two
                </div>
              </div>
              <div className="card-offers">50% off | Use coupon WELCOME50</div>
            </div>
          </Link>
        </div>
      );
    });

    return (
      <div className="filter-data">
        <div className="filter-data_1" id="filter1">
          <div className="filter-data_heading">
            <h2>Popular Brands</h2>
          </div>
          <div className="filter-data_cards">
            {restaurant}
            {/* Last Card */}
            <div className="card-container">
              <div className="card card-more">
                <h2>+108 More</h2>
              </div>
            </div>
            {/* Last Card */}
          </div>
        </div>
        {/* <div className="filter-data_2" id="filter1">
          <div className="filter-data_1">
            <div className="filter-data_heading">
              <h2>Offers Near You</h2>
            </div>
            <div className="filter-data_cards">

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
                    <h3>Leon Grill</h3>
                    <p>Turkish, Portuguese, American, Grill</p>
                  </div>
                  <div className="card-details">
                    <div className="rating">
                      <div className="rating-container">
                        <span className="rating-star">&#9733;</span>
                        <span className="rating-value">4.3</span>
                      </div>
                    </div>
                    <div className="prep-time">25 Mins</div>
                    <div className="price">$10 for two</div>
                  </div>
                  <div className="card-offers">
                    50% off | Use coupon WELCOME50
                  </div>
                </div>
              </div>



              <div className="card-container">
                <div className="card card-more">
                  <h2>+108 More</h2>
                </div>
              </div>

            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
export default Categorydata;

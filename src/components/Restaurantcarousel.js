import React, { Component } from "react";

import burger from "../images/burger.jpeg";

import { withRouter } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/constants";

class Restaurantcarousel extends Component {
  state = {
    restaurants: [],
    restaurant: []
  };

  componentDidMount() {
    let self = this;
    axios
      .get(`${baseUrl}/restaurants`)
      .then(function(response) {
        self.setState({
          restaurants: response.data.data
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    let name,
      address,
      costForTwo,
      avgRating,
      totalRatings,
      deliveryTime,
      cuisines = [];
    const currentRestaturant = this.state.restaurants.filter(cur => {
      if (cur.id === this.props.match.params.rname) {
        return cur;
      }
    });
    Object.entries(currentRestaturant).map(([k, v]) => {
      name = v.name;
      address = v.address;
      costForTwo = v.costForTwo.toString().slice(0, -2);
      avgRating = v.avgRating;
      totalRatings = v.totalRatings.toString().slice(0, -2);
      deliveryTime = v.deliveryTime;
      cuisines = [...v.cuisines];
    });

    return (
      <>
        <section className="restaurant-cta">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img src={burger} alt="burger" width="225" height="145" />
              </div>
              <div className="col-md-5">
                <h2>{name}</h2>
                <p>
                  {cuisines
                    .toString()
                    .split(",")
                    .join(", ")}
                </p>
                <p>{address}</p>
                <div className="restaurant-info">
                  <div className="ratings">
                    <div>
                      <span className="rating-icon"> &#9733; </span>
                      <span className="rating-value"> {avgRating} </span>
                    </div>
                    <div>{totalRatings} + Ratings</div>
                  </div>
                  <div className="delivery">
                    <div>{deliveryTime} mins</div>
                    <div>Delivery Time</div>
                  </div>
                  <div className="cost">
                    <div>₹ {costForTwo}</div>
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
export default withRouter(Restaurantcarousel);

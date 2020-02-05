import React, { Component } from "react";

import burger from "../images/burger.jpeg";
import Restaurantcart from "./Restaurantcart";
import Restaurantmobilecart from "./Restaurantmobilecart";
import { baseUrl } from "../utils/constants";

import axios from "axios";
import { withRouter } from "react-router-dom";

class RestaurantMenu extends Component {
  state = {
    items: {},
    categorisedItems: {}
  };

  componentDidMount() {
    let self = this;
    axios
      .get(`${baseUrl}/restaurant/${this.props.match.params.rname}`)
      .then(function(response) {
        self.setState({
          items: response.data.data.menu.items
        });
        const categoryInfo = {};
        const categoryData = Object.entries(self.state.items);
        //console.log(self.state);
        //console.log(categoryData);
        categoryData.map(([k, v]) => {
          if (categoryInfo[v.category]) {
            //categoryInfo[v.category]++;
            categoryInfo[v.category] = [
              ...categoryInfo[v.category],
              Object.assign({}, [v.description, v.id, v.name, v.price])
            ];
          } else {
            categoryInfo[v.category] = [
              Object.assign({}, [v.description, v.id, v.name, v.price])
            ];
          }
        });
        self.setState({
          categorisedItems: categoryInfo
        });
        //console.log(self.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const menuItems = Object.entries(this.state.categorisedItems).map(
      ([k, v]) => {
        return (
          <div className="item-categories" key={k}>
            <div className="row menu-items">
              <h2>{k}</h2>
              <p key={k}>{v.length} ITEMS</p>
            </div>

            <div className="row">
              <div className="itemsList">
                <div className="item-data_cards">
                  {/* Single Card */}
                  {v.map(item => {
                    //console.log(item);
                    return (
                      <div className="card-container" key={item[1]}>
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
                            <h3>{item[2]}</h3>
                            <p>Burger</p>
                          </div>
                          <div className="card-details">
                            <div className="price">₹ {item[3]}</div>
                            <div className="add-cart-btn">
                              <button className="btn-white">ADD</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* Single Card */}
                </div>
              </div>
            </div>
          </div>
        );
      }
    );

    return (
      <section className="cart">
        <div className="container">
          <div className="itemBox">{menuItems}</div>
          <div className="cartBox">
            <Restaurantcart />
          </div>
          <Restaurantmobilecart />
        </div>
      </section>
    );
  }
}
export default withRouter(RestaurantMenu);

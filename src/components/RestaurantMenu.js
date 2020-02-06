import React, { Component } from "react";

import burger from "../images/burger.jpeg";
import Restaurantcart from "./Restaurantcart";
import Restaurantmobilecart from "./Restaurantmobilecart";
import { baseUrl } from "../utils/constants";

import axios from "axios";
import { withRouter } from "react-router-dom";

class RestaurantMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      categorisedItems: {},
      cart: {},
      total: 0,
      currItemPrice: {},
      currentItemId: {}
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleAdd(name, id) {
    Object.entries(this.state.items).map(([k, v]) => {
      if (v.id === id) {
        const currentItemPrice = parseInt(v.price.toString().slice(0, -2));
        this.setState({
          total: this.state.total + parseInt(v.price.toString().slice(0, -2)),
          currItemPrice: {
            ...this.state.currItemPrice,
            [name]: currentItemPrice
          },
          currentItemId: {
            ...this.state.currentItemId,
            [name]: id
          }
        });
      }
    });
    this.setState({
      cart: {
        ...this.state.cart,
        [name]: (this.state.cart[name] || 0) + 1
      }
    });
  }

  handleDec(name, id) {
    Object.entries(this.state.items).map(([k, v]) => {
      if (v.id === id) {
        //console.log(v.price.toString().slice(0, -2));
        this.setState({
          total: this.state.total - parseInt(v.price.toString().slice(0, -2))
        });
      }
    });
    this.setState({
      cart: {
        ...this.state.cart,
        [name]: this.state.cart[name] - 1
      }
    });
  }

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
    //console.log(this.state);
    const { items, cart, total, currItemPrice, currentItemId } = this.state;
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
                            <div className="price">
                              ₹ {item[3].toString().slice(0, -2)}
                            </div>

                            {this.state.cart[item[2]] > 0 ? (
                              <div className="cart-counter-btn">
                                <div className="btn-white">
                                  <div
                                    onClick={() =>
                                      this.handleDec(item[2], item[1])
                                    }
                                  >
                                    -
                                  </div>
                                  <div>{this.state.cart[item[2]]}</div>
                                  <div
                                    onClick={() =>
                                      this.handleAdd(item[2], item[1])
                                    }
                                  >
                                    +
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className="add-cart-btn"
                                onClick={() => this.handleAdd(item[2], item[1])}
                              >
                                <button className="btn-white">ADD</button>
                              </div>
                            )}
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
            <Restaurantcart
              cart={cart}
              items={items}
              add={this.handleAdd}
              remove={this.handleDec}
              total={total}
              currItemPrice={currItemPrice}
              currentItemId={currentItemId}
            />
          </div>
          <Restaurantmobilecart />
        </div>
      </section>
    );
  }
}
export default withRouter(RestaurantMenu);

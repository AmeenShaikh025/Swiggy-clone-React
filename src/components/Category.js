import React, { Component } from "react";

import Categorytype from "./Categorytype";
import Categorydata from "./Categorydata";

import axios from "axios";
import { baseUrl } from "../utils/constants";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    let self = this;
    axios
      .get(`${baseUrl}/restaurants`)
      .then(function(response) {
        self.setState({
          items: response.data.data
        });
        //console.log(self.state);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <section className="filter">
        <div className="filter-container">
          <Categorytype />
          <Categorydata items={this.state.items} />
        </div>
      </section>
    );
  }
}
export default Category;

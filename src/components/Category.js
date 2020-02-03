import React, { Component } from "react";

import Categorytype from "./Categorytype";
import Categorydata from "./Categorydata";

class Category extends Component {
  render() {
    return (
      <section class="filter">
        <div class="filter-container">
          <Categorytype />
          <Categorydata />
        </div>
      </section>
    );
  }
}
export default Category;

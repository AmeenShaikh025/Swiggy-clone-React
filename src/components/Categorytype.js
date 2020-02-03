import React, { Component } from "react";

import filterImg2 from "../images/filter-img2.png";
import filterImg1 from "../images/filter-img1.png";
import filterSeal from "../images/filter-seall.png";

class Categorytype extends Component {
  render() {
    return (
      <div class="filter-type">
        <div class="filter-itemlist">
          <div class="filter-item active" href="#filter1">
            <div class="fliter-data-img">
              <img
                src={filterImg2}
                width="50px"
                height="50px"
                alt="popular brands"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item" href="#filter2">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Offers Near You</div>
              <div class="para">104 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">Popular Brands</div>
              <div class="para">114 OPTIONS</div>
            </div>
          </div>
          <div class="filter-item">
            <div class="fliter-data-img">
              <img
                src={filterSeal}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div class="filter-data-text">
              <div class="heading">SEE ALL</div>
              <div class="para">541 OPTIONS</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Categorytype;

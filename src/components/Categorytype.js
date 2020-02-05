import React, { Component } from "react";

import filterImg2 from "../images/filter-img2.png";
import filterImg1 from "../images/filter-img1.png";
import filterSeal from "../images/filter-seall.png";

class Categorytype extends Component {
  render() {
    return (
      <div className="filter-type">
        <div className="filter-itemlist">
          <div className="filter-item active" href="#filter1">
            <div className="fliter-data-img">
              <img
                src={filterImg2}
                width="50px"
                height="50px"
                alt="popular brands"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item" href="#filter2">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Offers Near You</div>
              <div className="para">104 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterImg1}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">Popular Brands</div>
              <div className="para">114 OPTIONS</div>
            </div>
          </div>
          <div className="filter-item">
            <div className="fliter-data-img">
              <img
                src={filterSeal}
                width="50px"
                height="50px"
                alt="offers near you"
              />
            </div>
            <div className="filter-data-text">
              <div className="heading">SEE ALL</div>
              <div className="para">541 OPTIONS</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Categorytype;

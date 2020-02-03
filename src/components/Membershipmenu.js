import React, { Component } from "react";

import swiggypop from "../images/swiggy-pop.jpeg";
import swiggypoptwo from "../images/swiggy-pop2.jpeg";
import swiggyorder from "../images/swiggy-order.png";

function Membershipmenu() {
  return (
    <section class="membership-menu">
      <div class="membership-container">
        <div class="membership-first">
          <div class="membership-img">
            <div class="membership-img_1">
              <img
                src={swiggypop}
                alt="swiggy pop"
                width="60px"
                height="60px"
              />
            </div>
            <div class="membership-img_2">
              <img
                src={swiggypoptwo}
                alt="swiggy pop"
                width="60px"
                height="60px"
              />
            </div>
          </div>
          <div class="membership-text">
            <h3>Introducing Swiggy Pop</h3>
            <p>Single Serve Meals, Free Delivery, No Extra Charges</p>
          </div>
          <div class="mebership-button">
            <button class="btn-common">order now</button>
          </div>
        </div>
        <div class="membership-second">
          <div class="membership-img">
            <div class="membership-img_1">
              <img
                src={swiggyorder}
                alt="swiggy order"
                width="60px"
                height="60px"
              />
            </div>
          </div>
          <div class="membership-text">
            <h3>Introducing Swiggy SUPER</h3>
            <p>
              The membership program you've been waiting for.
              <span>Grab it at unbelievable introductory prices!</span>
            </p>
          </div>
          <div class="mebership-button">
            <button class="btn-common">get super now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Membershipmenu;

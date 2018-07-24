import React, { Component } from "react";
import Cards from "../cards/cards";
import Cart from "../cart/cart";
import NavBar from "../nav/nav";
import "./main.css";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="row">
          <div className="col-7">
            <Cards />
          </div>
          <div class="vl" />
          <div className="col-4">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;

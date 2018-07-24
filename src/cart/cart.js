import React, { Component } from "react";
import CartObj from "../cart/cartobj/cartobj";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div className="list-group m-3">
        <h1>Cart</h1>
        <CartObj />
      </div>
    );
  }
}

export default Cart;

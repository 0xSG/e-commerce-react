import React, { Component } from "react";
import Card from "./card";
import "./cards.css";

class Cards extends Component {
  state = {};

  getproducts = () => {
    var product = {
      title: "my product",
      price: "453",
      imgS: "https://picsum.photos/200/300/?random",
      des: "This is my product title"
    };
    return (
      <div className="disfix row ">
        <Card prod={product} />
        <Card prod={product} />
        <Card prod={product} />
        <Card prod={product} />
        <Card prod={product} />
        <Card prod={product} />
      </div>
    );
  };

  getproducts = this.getproducts.bind(this);

  render() {
    return this.getproducts();
  }
}

export default Cards;

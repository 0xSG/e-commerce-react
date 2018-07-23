import React, { Component } from "react";
import Card from "./card";

class Cards extends Component {
  state = {};
  render() {
    var product = {
      title: "myproduct",
      price: "453",
      imgS: "https://picsum.photos/200/300/?random",
      des: "This is my product"
    };
    return <Card prod={product} />;
  }
}

export default Cards;

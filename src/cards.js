import React, { Component } from "react";
import Card from "./card";
import "./cards.css";

const axios = require("axios");

class Cards extends Component {
  state = {};

  constructor(prop) {
    super(prop);
    this.state = {
      products: []
    };

    axios
      .get("http://localhost:3007/getproducts")
      .then(result => {
        console.log(result.data);

        this.setState({ products: result.data });
      })
      .catch(err => {});
  }

  getproducts = () => {
    var list = this.state.products.map(product => {
      return <Card prod={product} key={product._id} />;
    });
    return <div className="disfix row ">{list}</div>;
  };

  getproducts = this.getproducts.bind(this);

  render() {
    return this.getproducts();
  }
}

export default Cards;

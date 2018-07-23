import React, { Component } from "react";
import Card from "./card";
import "./cards.css";
import HttpService from "./services/http-service";

const axios = require("axios");

var http = new HttpService();
class Cards extends Component {
  state = {};

  constructor(prop) {
    super(prop);
    this.state = {
      products: [
        // {
        //   title: "my product",
        //   price: "453",
        //   imgS: "https://picsum.photos/200/300/?random",
        //   des: "This is my product title"
        // },
      ]
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
      return <Card prod={product} />;
    });
    return <div className="disfix row ">{list}</div>;
  };

  getproducts = this.getproducts.bind(this);

  render() {
    return this.getproducts();
  }
}

export default Cards;

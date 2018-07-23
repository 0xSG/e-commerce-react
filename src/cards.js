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
      products: []
    };
    //new module to fetch the json from database
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

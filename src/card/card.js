import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  state = {};
  render() {
    return (
      <div className="col-sm-3 m-3 minsize">
        <div className="rounded card width m-3 shadow">
          <img
            className="cardImgTop"
            src={this.props.prod.imgSrc}
            alt="Card cap"
          />
          <div className="card-body m-3 centreMe">
            <h5 className="card-title">{this.props.prod.title}</h5>
            <p className="card-text">{this.props.prod.description}</p>
            <a
              href={"www.google.com"}
              className="btn btn-primary m-1 pull-left"
            >
              Add to cart
            </a>
            <a
              href={"www.google.com"}
              className="btn btn-primary m-1 pull-right"
            >
              Add to WishList
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import "./cartobj.css";

class CartObj extends Component {
  state = {};
  render() {
    return (
      <div className=" bg-secondary radiusSet minset">
        <div className="row ">
          <div className="col-4 ">
            <img
              className=" imgstyle"
              src={"https://picsum.photos/g/200/300"}
            />
          </div>
          <div className="col-6 ">
            <div className="btnMargin text-white">hello</div>
          </div>
          <div className="col-2">
            <button className="radiusSet btnMargin ">X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartObj;

import React, { Component } from "react";
import "./nav.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-inverse myNavbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              My Store
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  What Do We Got<span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">My</a>
                  </li>
                  <li>
                    <a href="#">Sarathi</a>
                  </li>
                  <li>
                    <a href="#">Assignment</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-shopping-cart" /> My Cart
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-tree-conifer" /> About Us
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-user" /> Sign Up
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

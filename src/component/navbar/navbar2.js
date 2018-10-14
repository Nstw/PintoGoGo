import React, { Component } from "react";
import "../navbar/style-navbar2.css";

export default class Navigationbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScrollHeight: 0
    };
  }

  componentDidMount() {
    window.onscroll = () => {
      this.setState({
        currentScrollHeight: window.scrollY
      });
    };
  }

  render() {
    const opacity = Math.max(this.state.currentScrollHeight / 100, 0.1);

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm fixed-top" style={{ opacity }}>
          <a href="/" className="navbar-brand">
            PintoGoGo
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Log In
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <img
                    src="../img/navbar/icon-cart2.png"
                    className="nav-icon"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

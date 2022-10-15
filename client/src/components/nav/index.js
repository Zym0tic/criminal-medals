import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import cmLogo from "../../assets/images/cm-logo.jpg";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img className="cm-logo" src={cmLogo} alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <div>{showNavigation()}</div>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>m
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Collections
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="bracelets">
                  Bracelets
                </Link>
                <Link className="dropdown-item" to="cord-necklaces">
                  Cord Necklaces
                </Link>
                <Link className="dropdown-item" to="sterling">
                  Sterling Silver
                </Link>
                <Link className="dropdown-item" to="rings">
                  Rings
                </Link>
                <Link className="dropdown-item" to="chains">
                  Chain Necklaces
                </Link>
                <Link className="dropdown-item" to="earrings">
                  Earrings
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                faq
              </Link>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="custom-orders.html">
                  Custom Orders
                </Link>
                <Link className="dropdown-item" to="shipping-refund.html">
                  Shipping//Refund Policy
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;

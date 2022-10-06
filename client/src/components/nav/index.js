import React from "react";
import cmLogo from "../../assets/images/cm-logo.jpg";
import { Link } from "react-router-dom";

function Nav() {
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light">

<a className="navbar-brand" href="/">
  <img className="cm-logo" src= {cmLogo} alt=""/>
</a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">


  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" href="/">Home</a>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Collections</a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/bracelets">Bracelets</a>
        <a className="dropdown-item" href="cord-necklaces.html">Cord Necklaces</a>
        <a className="dropdown-item" href="sterling.html">Sterling Silver</a>
        <a className="dropdown-item" href="rings.html">Rings</a>
        <a className="dropdown-item" href="chains.html">Chain Necklaces</a>
        <a className="dropdown-item" href="earring.html">Earrings</a>
      </div>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">faq</a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="custom-orders.html">Custom Orders</a>
        <a className="dropdown-item" href="shipping-refund.html">Shipping//Refund Policy</a>
      </div>
    </li>

    <li className="nav-item">
      <a className="nav-link" href="about.html">About</a>
    </li>
  </ul>

</div>
</nav>
    </>
    );
};

export default Nav;
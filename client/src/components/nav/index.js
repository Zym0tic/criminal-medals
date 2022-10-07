import React from "react";
import cmLogo from "../../assets/images/cm-logo.jpg";
import { Link } from "react-router-dom";

function Nav() {
    return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light">

<Link className="navbar-brand" to="/">
  <img className="cm-logo" src= {cmLogo} alt=""/>
</Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">


  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>
    </li>

    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Collections</Link>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="bracelets">Bracelets</Link>
        <Link className="dropdown-item" to="cord-necklaces">Cord Necklaces</Link>
        <Link className="dropdown-item" to="sterling">Sterling Silver</Link>
        <Link className="dropdown-item" to="rings">Rings</Link>
        <Link className="dropdown-item" to="chains">Chain Necklaces</Link>
        <Link className="dropdown-item" to="earrings">Earrings</Link>
      </div>
    </li>

    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">faq</Link>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="custom-orders.html">Custom Orders</Link>
        <Link className="dropdown-item" to="shipping-refund.html">Shipping//Refund Policy</Link>
      </div>
    </li>
  </ul>

</div>
</nav>
    </>
    );
};

export default Nav;
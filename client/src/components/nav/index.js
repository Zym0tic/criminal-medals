import React from "react";
import cmLogo from "../../assets/images/cm-logo.jpg";
// import { Link } from "react-router-dom";

function Nav() {
    return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light">

<a class="navbar-brand" href="index.html">
  <img class="cm-logo" src= {cmLogo} alt=""/>
</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">


  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="index.html">Home</a>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Collections</a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="bracelets.html">Bracelets</a>
        <a class="dropdown-item" href="cord-necklaces.html">Cord Necklaces</a>
        <a class="dropdown-item" href="sterling.html">Sterling Silver</a>
        <a class="dropdown-item" href="rings.html">Rings</a>
        <a class="dropdown-item" href="chains.html">Chain Necklaces</a>
        <a class="dropdown-item" href="earring.html">Earrings</a>
      </div>
    </li>

    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">faq</a>
      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="custom-orders.html">Custom Orders</a>
        <a class="dropdown-item" href="shipping-refund.html">Shipping//Refund Policy</a>
      </div>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="about.html">About</a>
    </li>
  </ul>

</div>
</nav>
    </>
    );
};

export default Nav;
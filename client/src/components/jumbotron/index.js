import React from "react";
import jumbotron from "../../assets/images/jumbotron.jpg"

function Jumbotron() {
  return (
    <>
      <img class="banner" src= { jumbotron } alt="criminal medals logo over image of jewlery" />
      <div class="centered">
        <h1>Criminal Medals</h1>
      </div>
    </>
  );
}

export default Jumbotron;

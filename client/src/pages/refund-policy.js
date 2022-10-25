import React from "react";
import { Link } from "react-router-dom";

const Return = () => {
  return (
    <>
      <section id="shipping-refund">
        <div className="container">
          <h2 className="shipping-heading">return policy</h2>
          <p>
            Criminal medals does not accept returns unless it is found there are
            flaws in the workmanship. The item must be in its unworn and
            original condition. We reserve the right to deny a refund to sender
            without prior return approval
          </p>
          <Link className="back-button" to="/">
            Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Return;

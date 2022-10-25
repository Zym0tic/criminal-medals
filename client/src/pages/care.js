import React from "react";
import { Link } from "react-router-dom";

const Care = () => {
  return (
    <>
      <section id="shipping-refund">
        <div className="container">
          <h2 className="shipping-heading">Care Instructions</h2>
          <h3>Sterling Silver</h3>
          <p>
            To prevent tarnishing keep your silver stored in a clean, dry
            airtight container. Minimize your jewelry's contact with harsh
            chemicals. Do not wear your jewelry in water ( swimming, bathing or
            showering ). Take jewelry off for bed, wipe clean with a soft cloth
            and place back in the airtight container
          </p>
          <h3>Copper, Nickel, Brass</h3>
          <p>
            To slow down tarnishing keep your silver stored in a clean, dry
            airtight container. Minimize your jewelry's contact with harsh
            chemicals. Do not wear your jewelry in water ( swimming, bathing or
            showering ). Take jewelry off for bed, wipe clean with a soft cloth
            and place back in the airtight container. If your jewelry begins to
            lose its protective coat over time clear nail polish works wonders.
          </p>
          <Link className="back-button" to="/">
            Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Care;

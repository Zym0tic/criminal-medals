import React from "react";
import { Link } from "react-router-dom";

import bracelet from "../../assets/images/collections/bracelet.PNG";
import sterling from "../../assets/images/collections/sterling.PNG";
import cord from "../../assets/images/collections/cord.PNG";
import ring from "../../assets/images/collections/rings.PNG";
import chain from "../../assets/images/collections/chain.PNG";
import earring from "../../assets/images/collections/earring.PNG";

const Collection = () => {
  return (
    <section id="collections-list">
      <h2 className="collections-heading">Collection List</h2>

      <div className="container-fluid c-list-links">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <Link to="sterling">
              <img
                className="collections"
                src={sterling}
                alt="sterling silver collection"
              />
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <Link to="cord-necklaces">
              <img className="collections" src={cord} alt="cord collection" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <Link to="rings">
              <img className="collections" src={ring} alt="ring collection" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <Link to="chains">
              <img className="collections" src={chain} alt="chain collection" />
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <Link to="bracelets">
              <img
                className="collections"
                src={bracelet}
                alt="bracelet collection"
              />
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <Link to="earrings">
              <img className="collections" src={earring} alt="earring collection" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;

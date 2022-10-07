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
      <h2 class="collections-heading">Collection List</h2>

      <div class="container-fluid c-list-links">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <Link to="sterling">
              <img
                class="collections"
                src={sterling}
                alt="sterling silver collection"
              />
            </Link>
          </div>
          <div class="col-lg-4 col-md-6">
            <Link to="cord-necklaces">
              <img class="collections" src={cord} alt="cord collection" />
            </Link>
          </div>
          <div class="col-lg-4 col-md-6">
            <Link to="rings">
              <img class="collections" src={ring} alt="ring collection" />
            </Link>
          </div>
          <div class="col-lg-4 col-md-6">
            <Link to="chains">
              <img class="collections" src={chain} alt="chain collection" />
            </Link>
          </div>
          <div class="col-lg-4 col-md-6">
            <Link to="bracelets">
              <img
                class="collections"
                src={bracelet}
                alt="bracelet collection"
              />
            </Link>
          </div>
          <div class="col-lg-4 col-md-6">
            <Link to="earrings">
              <img class="collections" src={earring} alt="earring collection" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;

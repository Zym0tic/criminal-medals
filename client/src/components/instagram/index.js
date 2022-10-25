import React from "react";
import marketImg from "../../assets/images/market-img.jpg";

const Instagram = () => {
  return (
    <>
      <section id="instagram">
        <div className="insta-row row">
          <div className="col-lg-6">
            <img className="market-img" src={marketImg} alt="" />
          </div>
          <div className="col-lg-6">
            <h2 className="insta-content insta-header">
              Criminal Medals on Instagram
            </h2>
            <p className="insta-content insta-para">
              For the most up to date information check out our instagram and
              give it a follow! Lots of vending dates coming up to see off
              summer, new releases, and giveaways!
            </p>
            <a
              rel=""
              href="https://www.instagram.com/criminalmedals/"
              className="btn btn-outline-light btn-lg insta-button"
              role="button"
              aria-pressed="true"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instagram;

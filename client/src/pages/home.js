import React from "react";
import Jumbotron from "../components/jumbotron";
import Collection from "../components/collection-list";
import Instagram from "../components/instagram";

const Home = () => {
    return (
        <>
        <Jumbotron />
        <Collection />
        <Instagram />
        </>
    );
};

export default Home;
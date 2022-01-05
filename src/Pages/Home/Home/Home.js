import React from "react";
import Banner from "../Banner/Banner";
import Review from "../Review/Review/Review";
import TopFeatures from "../TopFeatures/TopFeatures";
import TopProducts from "./../TopProducts/TopProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            <TopProducts />
            <TopFeatures />
            <Review />
        </div>
    );
};

export default Home;

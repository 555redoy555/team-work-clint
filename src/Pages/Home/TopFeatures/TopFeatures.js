import React from "react";

const TopFeatures = () => {
    return (
        <div className="container mx-auto my-24">
            <h1 className="text-5xl text-center font-bold my-20">
                Why Choose Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="p-3">
                    <img
                        className="w-full"
                        src="https://i.ibb.co/Qds45bf/best-price-guarantee.jpg"
                        alt=""
                    />
                    <h1 className="text-2xl font-medium my-3">
                        BEST PRICE GUARANTEE
                    </h1>
                    <p>
                        Low overheads, low cost. We don’t run with a vast
                        administrative set up and an enormous advertising
                        budget; and we pass on the benefit to you in our low
                        prices. You get an amazing product at an ultra low
                        price.
                    </p>
                </div>
                <div className="p-3">
                    <img
                        className="w-full"
                        src="https://i.ibb.co/bWVVmWf/user-friendly-website.png"
                        alt=""
                    />
                    <h1 className="text-2xl font-medium my-3">
                        USER-FRIENDLY WEBSITE, FOR EVERY DEVICE
                    </h1>
                    <p>
                        The Baby Land website has been built to be as accessible
                        as possible, to people of all abilities and
                        disabilities, no matter what browser or device they use
                        to visit the site. A specific mobile site has been setup
                        for a flawless iPhone, iPad and Android experience.
                    </p>
                </div>
                <div className="p-3">
                    <img
                        className="w-full"
                        src="https://i.ibb.co/YfXp1TJ/largest-collection-min.png"
                        alt=""
                    />
                    <h1 className="text-2xl font-medium my-3">
                        LARGEST SELECTION OF PRODUCTS
                    </h1>
                    <p>
                        We sell the finest baby toys collections, available at
                        the best prices. Some of our competitors carry a huge
                        amount of different brands, but only one or two products
                        from each brand. We give you the best total selection of
                        the products that actually work.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TopFeatures;

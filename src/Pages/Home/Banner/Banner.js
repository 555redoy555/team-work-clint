import { Link } from "react-router-dom";
import React from "react";

const Banner = () => {
    return (
        <div className="relative">
            <img
                className="w-full"
                src="https://i.ibb.co/3hLLCK8/home-banner.png"
                alt="Home page banner"
            />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 absolute inset-y-1">
                    <div className="flex justify-center items-center">
                        <div className="mx-6">
                            <h2 className="text-xl xs:text-3xl md:text-5xl lg:text-7xl text-white font-bold md:my-12">
                                KIDS TOY SHOP
                            </h2>
                            <p className="text-xs md:text-lg lg:text-xl text-white font-bold">
                                Explore the variety of toys we have to offer for
                                your little one
                            </p>
                            <Link
                                to="/shop"
                                className="text-sm inline-block sm:text-lg my-4 md:my-8 font-bold bg-green-300 py-1 px-2 sm:py-2 sm:px-4 rounded-lg"
                            >
                                Explore more
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

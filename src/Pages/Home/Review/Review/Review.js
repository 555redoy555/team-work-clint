import React from "react";
import { useState, useEffect } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://aqueous-forest-60906.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            });
    }, []);

    return (
        <div className="container mx-auto my-20">
            <h1 className="text-5xl text-center font-bold my-20">
                Customer Reviews
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {reviews.map((review) => (
                    <div key={review._id} className="grid grid-cols-12 gap-2">
                        <div className="col-span-2">
                            <img
                                className="w-full rounded-full"
                                src={review.img}
                                alt=""
                            />
                        </div>
                        <div className="col-span-10">
                            <h3 className="text-xl font-medium">
                                {review.name}
                            </h3>
                            <p>{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;

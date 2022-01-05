import React from "react";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
    const { user } = useAuth();

    const initialReviewInfo = {
        name: user.displayName,
        email: user.email,
        img: user?.photoURL,
    };

    const [review, setReview] = useState(initialReviewInfo);

    const handleReviewBtn = (e) => {
        e.preventDefault();
        if (!review.img) {
            review.img = "https://i.ibb.co/h2BHyJj/blank-user.jpg";
        }

        fetch("https://aqueous-forest-60906.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Review added successfully");
                }
            });
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...review };
        newLoginData[field] = value;
        setReview(newLoginData);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium mb-5">Give a review</h2>
            <form onSubmit={handleReviewBtn}>
                <p className="text-lg font-bold">Name:</p>
                <input
                    required
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter your name"
                    defaultValue={user.displayName}
                />
                <p className="text-lg font-bold mt-4">Email:</p>
                <input
                    required
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter your email"
                    defaultValue={user.email}
                />
                <p className="text-lg font-bold mt-4">Review</p>
                <textarea
                    required
                    type="text"
                    name="review"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write your review"
                />
                <input
                    className="font-bold bg-green-300 py-2 px-4 rounded-lg block my-4 cursor-pointer"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default AddReview;

import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
    const [productInfo, setProductInfo] = useState({});
    const history = useHistory();

    const handleAddProduct = (e) => {
        e.preventDefault();

        fetch("https://aqueous-forest-60906.herokuapp.com/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Added A product successfully");
                    history.push("/dashboard/addProduct");
                }
            });
    };

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...productInfo };
        newLoginData[field] = value;
        setProductInfo(newLoginData);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium my-3">Add a new product</h2>
            <form onSubmit={handleAddProduct}>
                <p className="text-lg font-bold">Product Name:</p>
                <input
                    required
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter product name"
                />
                <p className="text-lg font-bold mt-4">Short Information:</p>
                <textarea
                    required
                    type="text"
                    name="shortInfo"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write a short information"
                />
                <p className="text-lg font-bold mt-4">Description:</p>
                <textarea
                    required
                    type="text"
                    name="description"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Write a description"
                />
                <p className="text-lg font-bold mt-4">Price:</p>
                <input
                    required
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter price"
                />
                <p className="text-lg font-bold mt-4">Image URL:</p>
                <input
                    required
                    type="text"
                    name="img"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full"
                    placeholder="Enter image URL"
                />
                <input
                    className="font-bold bg-green-300 py-2 px-4 rounded-lg block my-4 cursor-pointer"
                    type="submit"
                    value="Add Product"
                />
            </form>
        </div>
    );
};

export default AddProduct;

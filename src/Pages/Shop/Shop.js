import React, { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://aqueous-forest-60906.herokuapp.com/products/")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    return (
        <div className="container mx-auto my-16">
            <h1 className="text-6xl font-bold text-center text-gray-600 my-12">
                Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((product) => (
                    <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>
                ))}
            </div>
        </div>
    );
};

export default Shop;

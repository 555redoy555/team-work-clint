import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
    return (
        <div className="border-2 border-gray-400 p-4 rounded flex flex-col justify-between drop-shadow-lg">
            <div>
                <div>
                    <img className="w-full" src={product.img} alt="product" />
                </div>
                <div>
                    <h3 className="text-2xl font-medium mb-5">
                        {product.name}
                    </h3>
                    <p className="text-lg">{product.shortInfo}</p>
                </div>
            </div>
            <div className="mt-5 py-2 border-t-2 border-gray-400 flex justify-between">
                <h1 className="text-4xl text-yellow-700">${product.price}</h1>
                <div className="flex items-center">
                    <Link
                        to={`/purchase/${product._id}`}
                        className="font-bold bg-green-300 py-2 px-4 rounded-lg "
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

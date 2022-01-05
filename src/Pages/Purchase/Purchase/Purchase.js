import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAuth from "./../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const history = useHistory();

    const initialOrderInfo = {
        name: user.displayName,
        email: user.email,
        phone: "",
    };
    const [orderInfo, setOrderInfo] = useState(initialOrderInfo);

    useEffect(() => {
        fetch(`https://aqueous-forest-60906.herokuapp.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [id]);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    };

    const handlePurchase = (e) => {
        e.preventDefault();
        const order = {
            ...orderInfo,
            product: {
                id: product._id,
                name: product.name,
                img: product.img,
                price: product.price,
            },
            shippingStatus: "pending",
        };

        fetch("https://aqueous-forest-60906.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Order placed successfully");
                    history.push("/shop");
                }
            });
    };

    return (
        <div className="container mx-auto my-16">
            <h1 className="text-5xl text-gray-700 font-bold text-center">
                Purchase product
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-28">
                <div className="lg:col-span-5">
                    <img className="w-full" src={product.img} alt="" />
                </div>
                <div className="lg:col-span-7 flex flex-col justify-center">
                    <h1 className="text-4xl font-medium my-4">
                        {product.name}
                    </h1>
                    <p className="text-lg">{product.description}</p>
                    <h2 className="text-3xl my-3">
                        <span className="font-medium">Price: </span>
                        <span className="text-yellow-700">
                            ${product.price}
                        </span>
                    </h2>
                </div>
            </div>
            <div>
                <h1 className="text-3xl text-center font-bold my-5">
                    Order Form
                </h1>
                <div className="flex justify-center">
                    <form
                        onSubmit={handlePurchase}
                        className="md:w-2/4 bg-gray-300 p-5 rounded-lg"
                    >
                        <p className="text-lg font-medium mt-4">Name:</p>
                        <input
                            className="w-full border-2 rounded border-gray-400 p-1"
                            type="text"
                            required
                            defaultValue={user.displayName}
                            placeholder="Enter your name"
                            name="name"
                            onBlur={handleOnBlur}
                        />
                        <p className="text-lg font-medium mt-4">Email:</p>
                        <input
                            className="w-full border-2 rounded border-gray-400 p-1"
                            type="email"
                            required
                            defaultValue={user.email}
                            placeholder="Enter your email"
                            name="email"
                            onBlur={handleOnBlur}
                        />
                        <p className="text-lg font-medium mt-4">Phone:</p>
                        <input
                            className="w-full border-2 rounded border-gray-400 p-1"
                            type="number"
                            required
                            defaultValue=""
                            placeholder="Enter your phone number"
                            name="phone"
                            onBlur={handleOnBlur}
                        />
                        <p className="text-lg font-medium mt-4">Address:</p>
                        <input
                            className="w-full border-2 rounded border-gray-400 p-1"
                            type="text"
                            required
                            defaultValue=""
                            placeholder="Enter your address"
                            name="address"
                            onBlur={handleOnBlur}
                        />
                        <div className="text-center mt-5">
                            <input
                                type="submit"
                                value="Place order"
                                className="bg-green-300 py-2 px-4 rounded-sm font-medium cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;

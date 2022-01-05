import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://aqueous-forest-60906.herokuapp.com/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyOrders(data);
            });
    }, [user.email]);

    const handleCancelBtn = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to cancel this order?"
        );
        if (proceed) {
            fetch(`https://aqueous-forest-60906.herokuapp.com/orders/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Canceled the order successfully");
                    }
                    const rest = myOrders.filter((order) => order._id !== id);
                    // console.log(rest);
                    setMyOrders(rest);
                });
        }
    };

    return (
        <div className="container mx-auto my-5 my-orders-page">
            <h1 className="text-3xl font-medium my-3">Manage My Orders</h1>
            <div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Cost</th>
                            <th>Ordered by</th>
                            <th>Phone</th>
                            <th>Status</th>

                            <th>Cancel</th>
                            {
                                <th>Payment</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.map((order) => (
                            <tr key={order._id}>
                                <td data-title="Product Name">
                                    {order.product.name}
                                </td>
                                <td data-title="Cost">
                                    ${order.product.price}
                                </td>
                                <td data-title="Ordered by">{order.name}</td>
                                <td data-title="Phone">{order.phone}</td>
                                <td data-title="Status">
                                    {order.shippingStatus}
                                </td>
                                <td data-title="Cancel">
                                    <button
                                        className="cancel-order-btn"
                                        onClick={() =>
                                            handleCancelBtn(order._id)
                                        }
                                    >
                                        Cancel
                                    </button>
                                </td>
                                <td data-title="Payment">
                                    <Link to={`/pay/${order._id}`} >pay</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;

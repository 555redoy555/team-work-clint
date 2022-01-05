import React, { useEffect, useState } from "react";

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-forest-60906.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);

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
                    const rest = orders.filter((order) => order._id !== id);
                    // console.log(rest);
                    setOrders(rest);
                });
        }
    };

    return (
        <div className="container mx-auto my-5 my-orders-page">
            <h1 className="text-3xl font-medium my-3">Manage All Orders</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;

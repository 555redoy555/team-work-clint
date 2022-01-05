import React, { useEffect, useState } from "react";

const ManageCars = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-forest-60906.herokuapp.com/products/`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            const url = `https://aqueous-forest-60906.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingProducts = products.filter(
                            (product) => product._id !== id
                        );
                        setProducts(remainingProducts);
                    }
                });
        }
    };

    return (
        <div className="container mx-auto my-5 my-orders-page">
            <h1 className="text-3xl font-medium my-3">Manage All Products</h1>
            <div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Cost</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td data-title="Product Image">
                                    <div className="flex justify-center">
                                        <img
                                            src={product.img}
                                            alt="product display"
                                        />
                                    </div>
                                </td>
                                <td data-title="Product Name">
                                    {product.name}
                                </td>
                                <td data-title="Cost">${product.price}</td>
                                <td data-title="Delete">
                                    <button
                                        className="cancel-order-btn"
                                        onClick={() =>
                                            handleDeleteProduct(product._id)
                                        }
                                    >
                                        Delete
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

export default ManageCars;

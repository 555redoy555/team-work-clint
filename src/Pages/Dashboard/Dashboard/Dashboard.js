import * as React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import useAuth from "./../../../hooks/useAuth";
import AdminRoute from "./../../AdminRoute/AdminRoute";
import Pay from "./../Pay/Pay";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddProduct from "./../AddProduct/AddProduct";
import Review from "./../AddReview/AddReview";
import ManageAllOrders from "./../ManageAllOrders/ManageAllOrders";
import ManageProducts from "./../ManageProducts/ManageProducts";

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const drawer = (
        <div className="flex md:flex-col justify-between ">
            <div>
                <Link className="no-underline text-lg block my-2" to={`${url}`}>
                    <button>My Orders</button>
                </Link>
                <Link
                    className="no-underline text-lg block my-2"
                    to={`${url}/pay`}
                >
                    <button>Payment</button>
                </Link>
                <Link
                    className="no-underline text-lg block my-2"
                    to={`${url}/addReview`}
                >
                    <button>Review</button>
                </Link>
                <p className="md:border-t-2 border-gray-500 my-5"></p>
            </div>

            {admin && (
                <div>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/manageAllOrders`}
                    >
                        Manage All Orders
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/manageProducts`}
                    >
                        Manage Products
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/addProduct`}
                    >
                        Add A Product
                    </Link>
                    <Link
                        className="no-underline text-lg block my-2"
                        to={`${url}/makeAdmin`}
                    >
                        Make Admin
                    </Link>
                </div>
            )}
        </div>
    );

    return (
        <div className="grid grid-cols-12 gap-5" style={{ minHeight: "500px" }}>
            <div className="col-span-12 md:col-span-2 p-5 bg-green-400">
                {drawer}
            </div>
            <div className="col-span-12 md:col-span-10 py-10">
                <Switch>
                    <Route exact path={path}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <Review />
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div style={{ minHeight: "600px" }}>
                <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/home",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;

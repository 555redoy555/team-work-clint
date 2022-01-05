import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, isLoading, loginUser, loginUsingGoogle } =
        useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    };

    const handleGoogleLogin = () => {
        loginUsingGoogle(location, history);
    };
    return (
        <div>
            <div
                className="bg-gradient-to-r from-green-400 to-blue-600"
                style={{ minHeight: "700px" }}
            >
                <div className="container mx-auto py-20 text-center">
                    {isLoading ? (
                        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    ) : (
                        <div className="text-center bg-white inline-block py-6 px-8 rounded-lg lg:w-1/3">
                            <form onSubmit={handleLogin}>
                                <h1 className="text-3xl font-bold mb-5">
                                    Please login
                                </h1>
                                <p className="text-lg font-bold text-left">
                                    Email:
                                </p>
                                <input
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    className="border-gray-400 border-2 p-1 rounded w-full"
                                    placeholder="Enter your email"
                                />
                                <p className="text-lg font-bold text-left mt-5">
                                    Password:
                                </p>
                                <input
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    className="border-gray-400 border-2 p-1 rounded w-full"
                                    placeholder="Enter your password"
                                />
                                <input
                                    className="font-bold bg-green-300 py-2 px-4 rounded-lg my-5 cursor-pointer"
                                    type="submit"
                                    value="Login"
                                />
                            </form>
                            {user.email && (
                                <div
                                    className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700"
                                    role="alert"
                                >
                                    <svg
                                        className="w-5 h-5 inline mr-3"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <div>Login is successful!</div>
                                </div>
                            )}
                            {authError && (
                                <div
                                    className="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
                                    role="alert"
                                >
                                    <svg
                                        className="w-5 h-5 inline mr-3"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <div>{authError}</div>
                                </div>
                            )}
                            <p className="text-gray-500 mt-8 text-sm">
                                Or login with
                            </p>
                            <img
                                className="w-9 mx-auto mt-8 mb-5 cursor-pointer"
                                onClick={handleGoogleLogin}
                                src="https://i.ibb.co/RYX7cKq/google-logo.png"
                                alt=""
                            />
                            <p>Don't have an account?</p>
                            <Link
                                to="/register"
                                className="text-blue-600 underline"
                            >
                                Create account here
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;

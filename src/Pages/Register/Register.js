import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, authError, registerNewUser, isLoading, loginUsingGoogle } =
        useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...registerData };
        newLoginData[field] = value;
        setRegisterData(newLoginData);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        registerNewUser(
            registerData.email,
            registerData.password,
            registerData.name,
            history
        );
    };
    return (
        <div>
            <div
                className="text-center bg-gradient-to-r from-green-400 to-blue-500 py-16"
                style={{ minHeight: "700px" }}
            >
                {isLoading ? (
                    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <form
                        onSubmit={handleRegistration}
                        className="inline-block bg-white p-8 rounded-lg lg:w-1/3"
                    >
                        <h1 className="text-3xl font-bold mb-5">
                            Please Register
                        </h1>
                        <p className="text-lg font-bold text-left">
                            User Name:
                        </p>
                        <input
                            type="text"
                            name="name"
                            onBlur={handleOnBlur}
                            placeholder="Enter your name"
                            className="border-gray-400 border-2 p-1 rounded w-full"
                        />
                        <p className="text-lg font-bold text-left mt-4">
                            Email:
                        </p>
                        <input
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder="Enter your email"
                            className="border-gray-400 border-2 p-1 rounded w-full"
                        />
                        <p className="text-lg font-bold text-left mt-4">
                            Password:
                        </p>
                        <input
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            placeholder="Enter your password"
                            className="border-gray-400 border-2 p-1 rounded w-full"
                        />
                        <input
                            className="font-bold bg-green-300 py-2 px-4 rounded-lg  my-6 cursor-pointer"
                            type="submit"
                            value="Sign Up"
                        />
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
                        <p>Already have an account?</p>
                        <Link to="/login" className="text-blue-600 underline">
                            Login here
                        </Link>
                        <p className="text-gray-500 mt-8 text-sm">
                            Or login with
                        </p>
                        <img
                            className="w-9 mx-auto mt-8 mb-5 cursor-pointer"
                            onClick={() => loginUsingGoogle(location, history)}
                            src="https://i.ibb.co/RYX7cKq/google-logo.png"
                            alt=""
                        />
                    </form>
                )}
            </div>
        </div>
    );
};

export default Register;

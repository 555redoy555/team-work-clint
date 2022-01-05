import React from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Disclosure as="nav" className="bg-green-300">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex sm:items-center sm:justify-start justify-end">
                                <div className="flex-shrink-0">
                                    <Link to="/home">
                                        <img
                                            className="lg:block w-20"
                                            src="https://i.ibb.co/C6JW8Nw/baby-land-logo.png"
                                            alt="Workflow"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        <Link
                                            className="px-3 py-2 rounded-full text-gray-800 font-bold hover:bg-gray-300"
                                            to="/shop"
                                        >
                                            Shop
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute hidden inset-y-0 right-0 sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {user.email && (
                                    <Link
                                        to="/dashboard"
                                        className="px-3 py-2 rounded-full text-gray-800 font-bold hover:bg-gray-300"
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <div>
                                    {user.photoURL ? (
                                        <img
                                            className="h-10 w-10 rounded-full ml-2"
                                            src={user.photoURL}
                                            alt="profile"
                                        />
                                    ) : (
                                        <p>{user.displayName}</p>
                                    )}
                                </div>
                                {user.email ? (
                                    <button
                                        onClick={logOut}
                                        className="text-white font-bold ml-2 px-5 py-2 bg-red-700 rounded-lg"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="text-white font-bold ml-2 px-5 py-2 bg-green-700 rounded-lg"
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col justify-center items-center">
                            <Link
                                to="/shop"
                                className="px-3 py-2 rounded-lg text-gray-800 font-bold hover:bg-gray-300"
                            >
                                shop
                            </Link>
                            {user.email && (
                                <Link
                                    to="/dashboard"
                                    className="px-3 py-2 rounded-lg text-gray-800 font-bold hover:bg-gray-300"
                                >
                                    Dashboard
                                </Link>
                            )}
                            <div>
                                {user.photoURL ? (
                                    <img
                                        className="h-10 w-10 rounded-full ml-2"
                                        src={user.photoURL}
                                        alt="profile"
                                    />
                                ) : (
                                    <p>{user.displayName}</p>
                                )}
                            </div>
                            {user.email ? (
                                <button
                                    onClick={logOut}
                                    className="text-white font-bold ml-2 px-5 py-2 bg-red-700 rounded-lg"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link
                                    to="/login"
                                    className="text-white font-bold ml-2 px-5 py-2 bg-green-700 rounded-lg"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;

import { useEffect, useState } from "react";
import initializeAuthentication from "./../Firebase/firebase.init";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerNewUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError("");
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {})
                    .catch((error) => {
                        setAuthError(error?.message);
                    });

                // Save user to database
                saveUser(email, name, "POST");
                history.replace("/home");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setAuthError("");
                const destination = location?.state.from || "/home";
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error?.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const loginUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setAuthError("");
                saveUser(result.user.email, result.user.displayName, "PUT");
                const destination = location?.state.from || "/home";
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error?.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                setAuthError("");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://aqueous-forest-60906.herokuapp.com/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`https://aqueous-forest-60906.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.admin);
            });
    }, [user.email]);

    return {
        user,
        admin,
        authError,
        isLoading,
        registerNewUser,
        loginUser,
        loginUsingGoogle,
        logOut,
    };
};

export default useFirebase;

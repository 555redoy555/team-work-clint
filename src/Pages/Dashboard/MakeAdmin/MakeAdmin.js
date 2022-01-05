import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    const handleAdminSubmit = (e) => {
        const user = { email };

        fetch("https://aqueous-forest-60906.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("Successfully promoted the user to admin");
                } else {
                    alert(
                        "Promotion to admin not successful. Please check if the email address is right or not."
                    );
                }
            });
        e.preventDefault();
        e.target.value = "";
    };
    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-medium">Promote to Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <p className="text-lg font-bold mt-8">Email:</p>
                <input
                    type="email"
                    onBlur={handleOnBlur}
                    className="border-gray-400 border-2 p-1 rounded w-full sm:w-3/4 md:w-2/4"
                    placeholder="Enter email address"
                />
                <input
                    className="font-bold bg-green-300 py-2 px-4 rounded-lg block my-4 cursor-pointer"
                    type="submit"
                    value="Make Admin"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;

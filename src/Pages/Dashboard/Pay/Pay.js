import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51KDoF3BdmbsPOxTBq9nIRjjF86BYofze4SgFcYsWuwU2qClFScNud3OoKfwvnHojogENDvTleYSdViVAXUIquDn300byw0nJFd')

const Payment = () => {
    const { id } = useParams();
    const [pay, setPay] = useState({});
    useEffect(() => {
        fetch(`https://aqueous-forest-60906.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setPay(data));
    }, [id]);
    console.log(pay)
    console.log(id)
    return (
        <div>
            <h2>Please Pay for: {pay.name} for {pay.price}</h2>
            <h4>Pay: ${pay.price}</h4>
            {pay?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    pay={pay}
                />
            </Elements>}
        </div>
    );
};

export default Payment;

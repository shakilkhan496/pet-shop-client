import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';


const CheckOut = ({ paymentData }) => {
    const { img, _id, title } = paymentData;
    const { user, payPrice } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, serCardErr] = useState('');
    const [success, setsuccess] = useState('');
    const [txnId, setTxnId] = useState('');
    const price = payPrice;

    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(" http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {

            serCardErr(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            serCardErr('');
        }
        setsuccess('');
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,
                    },
                },
            },


        );

        if (confirmError) {
            serCardErr(confirmError.message);
            return;
        }
        const paymentInfo = {
            price,
            email: user.email,
            name: user.displayName,
            transactionId: paymentIntent.id,
            orderId: _id,
            title,
            status: 'paid',
            img
        }

        toast.success('Payment successful');
        if (paymentIntent.status === 'succeeded') {
            setsuccess('Congratulations!!! Your payment was successful');
            setTxnId(paymentIntent.id);
            fetch(' http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(paymentInfo)
            })
                .then((res) => res.json())
                .then(data => {

                })

        }
    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-10 w-full bg-gradient-to-r
                from-primary to-secondary text-white  ' type="submit" disabled={!stripe}>
                    Pay now
                </button>
            </form>
            {cardErr && <div className='error mt-4 text-primary   font-semibold'>{cardErr}</div>}
            <div className='mt-6'>
                {
                    success &&
                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>

                                    <th className='text-center text-xl animate-bounce'>Your Transaction ID</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th className='text-center input input-bordered text-xl text-green-500'>{txnId}</th>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default CheckOut;
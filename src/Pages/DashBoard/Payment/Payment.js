import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import CheckOut from '../../../shared/CheckOut/CheckOut';
import AccountSubscription from './Subscription';
import Register from './Subscription';
import ProductDisplay from './Subscription';
import Subscription from './Subscription';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const paymentData = useLoaderData();
    const navigation = useNavigation();
    const { payPrice } = useContext(AuthContext);
    const { price, title, _id, img } = paymentData;

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='mx-5 mt-4  text-3xl font-bold  '>Payment</h1>
            <p className='p-5 text-xl   font-bold'>Please pay <span className='ring-1 px-2 rounded'> <span className='text-primary'>{payPrice}</span> $</span> for {title}</p>

            <div className='px-5 lg:w-2/3 lg:mx-auto mx-5 rounded-xl  mt-10 shadow-xl py-10'>
                <Elements stripe={stripePromise}>
                    <CheckOut paymentData={paymentData}></CheckOut>
                    {/* <Subscription></Subscription> */}
                </Elements>
            </div>

        </div>
    );
};

export default Payment;
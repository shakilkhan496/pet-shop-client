import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';


const FoodDetails = () => {
    const foodData = useLoaderData();
    const { user, logOut } = useContext(AuthContext);
    const { isAdmin } = useAdmin(user?.email);

    const [quantity, setQuantity] = useState(0);
    const [counter, setCounter] = useState(0);
    const { setPayPrice } = useContext(AuthContext);
    const increment = () => {
        setCounter(counter + 1);
        // setQuantity(counter);
        console.log('clicked')
    }
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            // setQuantity(counter);
        }
        else {
            return;
        }
    }

    console.log(foodData);
    const { title, img, description, status, price, sellerEmail, _id } = foodData;
    const updatedPrice = parseFloat(price) * counter;
    useEffect(() => {
        setPayPrice(updatedPrice);
    }, [updatedPrice, setPayPrice]);




    return (
        <section>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="200"
                className="hero min-h-screen  py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mt-3 space-y-2 p-10'>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="bg-primary text-white py-2 pl-2 rounded-xl">{description}</p>
                        <p className='text-xl'>Status : <span className='text-green-500'>{
                            status === 'paid' ? 'item is sold out' : 'Available'

                        }</span></p>
                        <p className='font-semibold text-accent'>Contact seller : {sellerEmail}</p>
                        <p className='text-xl font-semibold'>Price : {price} $</p>
                        <div className='bg-purple-300 space-y-2 p-4 rounded-3xl'>
                            <h1 className='text-xl font-semibold'>Set quantity</h1>
                            <div className='flex items-center'>
                                <button onClick={increment} className='btn btn-circle bg-gray-500 btn-sm font-semibold text-white'>+</button>
                                <p className=' px-3 bg-white ml-1 mr-1'>{counter}</p>
                                <button onClick={decrement} className='btn btn-circle bg-gray-500 btn-sm font-semibold text-white'>-</button>

                            </div>
                            <p className='text-xl text-white bg-black p-2 rounded-2xl'>Total amount : <span className='bg-white text-black px-2 rounded-xl'>{updatedPrice}</span> $</p>
                        </div>
                        {
                            status === 'paid' && <h1>Item isn't available</h1>
                        }
                        {
                            status === 'available' &&
                            <Link to={`/food/payment/${_id}`} disabled={counter === 0} className="btn btn-primary normal-case text-xl">Order Now</Link>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetails;
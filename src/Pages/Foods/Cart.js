import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useEffect } from 'react';
import { useState } from 'react';


const Cart = () => {
    const { user } = useContext(AuthContext);
    const { data: myCart = [], refetch } = useQuery({
        queryKey: ['myCart'],
        queryFn: () => fetch(`https://pet-shop-server.vercel.app/cart?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })
    console.log(myCart)

    const handleDelete = (id) => {
        fetch(`https://pet-shop-server.vercel.app/deleteOne?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ id })
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Removed from cart')
                }
            })
    }



    return (
        <div>
            <div>
                <h1 className={`text-2xl ${myCart.length === 0 ? 'animate-bounce' : ''} font-bold p-10`}>My Cart</h1>
            </div>
            <div>
                {
                    myCart.length === 0 &&
                    <h1 className='text-center font-extrabold rounded-3xl mx-10 animate-pulse text-5xl bg-red-500 py-5'>EMPTY</h1>
                }
                {
                    myCart.length > 0 &&
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>
                                        <label>
                                            <p>S.L No</p>
                                        </label>
                                    </th>
                                    <th>Product</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Take action</th>
                                    <th> Delete </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myCart?.map((myOrder, idx) => <tr key={idx}>
                                        <th>
                                            <label>
                                                {idx + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask  w-16 h-16">
                                                        <img src={myOrder.data.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='text-xl font-semibold  '>{myOrder.data.title}</p>
                                        </td>
                                        <td className='font-semibold text-xl text-primary'>{myOrder.data.price} $</td>
                                        <th>
                                            <Link to={`/food/${myOrder.data.id}`}>See details</Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(myOrder._id)} className='btn btn-xs bg-red-500 text-white'>Delete</button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>



                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;
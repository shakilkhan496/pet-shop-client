import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: () => fetch(`http://localhost:5000/myOrders?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })
    console.log(myOrders)

    return (
        <div>
            <div>
                <h1 className='text-2xl   font-bold p-10'>My orders</h1>
            </div>
            <div>
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
                                <th>Payment status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                myOrders?.map((myOrder, idx) => <tr key={idx}>
                                    <th>
                                        <label>
                                            {idx + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask  w-16 h-16">
                                                    <img src={myOrder.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-xl font-semibold  '>{myOrder.title}</p>
                                    </td>
                                    <td className='font-semibold text-xl text-primary'>{myOrder.price} $</td>
                                    <th>
                                        {myOrder.status}
                                    </th>
                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
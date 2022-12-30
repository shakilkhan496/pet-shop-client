import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


const Cart = () => {
    const { user } = useContext(AuthContext);
    const { data: myCart = [], refetch } = useQuery({
        queryKey: ['myCart'],
        queryFn: () => fetch(`http://localhost:5000/cart?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })
    console.log(myCart)

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteOne?id=${id}`, {
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
                <h1 className='text-2xl   font-bold p-10'>My Cart</h1>
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
                                        <Link to={`/food/${myOrder.id}`}>See details</Link>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(myOrder._id)} className='btn btn-xs bg-red-500 text-white'>Delete</button>
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

export default Cart;
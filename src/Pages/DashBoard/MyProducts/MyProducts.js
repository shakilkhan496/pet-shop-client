import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(` http://localhost:5000/myProducts?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })



    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            fetch(' http://localhost:5000/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id
                })
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Deleted!!');
                        refetch();
                    }
                })
        }
    }



    return (
        <div className='space-y-5'>
            <h1 className='mt-5 text-4xl text-primary'>Product vs Price chart</h1>
            <div className='w-[500px] h-[500px]'>
                <ResponsiveContainer width={700} height="80%">
                    <LineChart

                        data={myProducts}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis type='category' dataKey="title" />
                        <YAxis dataKey='price' type="number" domain={[0, 500]}></YAxis>
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="price" stroke="#ff7300" yAxisId={0} />

                    </LineChart>
                </ResponsiveContainer>
                <p className='text-center text-2xl py-10'>Total price: {
                    myProducts.reduce((a, b) => a + b.price, 0)
                }</p>
            </div>

            <div className='text-xl font-bold p-5'>
                {
                    isLoading && <Loading></Loading>
                }
                My Foods
            </div>
            {
                myProducts.length === 0 ? <>
                    <div className='text-center font-semibold p-10'>
                        <h1>No products ware added</h1>
                    </div>
                </>
                    :
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
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        myProducts &&
                                        myProducts?.map((myProduct, idx) => <tr key={idx}>
                                            <th>
                                                <label>
                                                    {idx + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={myProduct.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{myProduct.title}</p>
                                            </td>
                                            <td>{myProduct.price}</td>


                                            <th>
                                                <button
                                                    onClick={() => handleDelete(myProduct._id)}
                                                    className="btn bg-primary btn-ghost btn-xs px-4 text-white  ">Delete</button>
                                            </th>

                                        </tr>)


                                    }

                                </tbody>



                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyProducts;
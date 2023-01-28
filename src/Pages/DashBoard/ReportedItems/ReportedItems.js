import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    const { data: reportedItems = [], refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: () => fetch(` http://localhost:5000/reported`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            fetch(` http://localhost:5000/deleteReported`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Product deleted successfully');
                        refetch();
                    }
                })
        }

    }
    return (
        <div>
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
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                reportedItems?.map((reportedItem, idx) => <tr key={idx}>
                                    <th>
                                        <label>
                                            {idx + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={reportedItem.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{reportedItem.productName}</p>
                                    </td>
                                    <td>{reportedItem.resalePrice}</td>
                                    <th>
                                        <button onClick={() => handleDelete(reportedItem._id)} className="btn bg-primary btn-ghost btn-xs px-4 text-white  ">Delete this</button>
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

export default ReportedItems;
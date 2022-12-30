import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Allseller = () => {
    const { data: allSeller = [], refetch } = useQuery({
        queryKey: ['allSeller'],
        queryFn: () => fetch(` http://localhost:5000/allSeller`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            fetch(` http://localhost:5000/deleteSeller`, {
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
                        toast.success('Seller Deleted successfully');
                        refetch();
                    }
                })
        }
    }

    const handleVerify = (id, email) => {
        const confirm = window.confirm('Are you sure you want to verify?')
        if (confirm) {
            fetch(' http://localhost:5000/verify', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Seller Verified successfully');
                        refetch();
                    }
                })

            fetch(' http://localhost:5000/verifyState2', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Seller Verified successfully');
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
                                <th>Seller name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allSeller?.map((seller, idx) => <tr key={idx}>
                                    <th>
                                        <label>
                                            {idx + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <h1>{seller.name}</h1>
                                    </td>
                                    <td>
                                        <p>{seller.email}</p>
                                    </td>
                                    <td>
                                        <button disabled={`${seller.isVerified === true ? 'disabled' : ''}`} onClick={() => handleVerify(seller._id, seller.email)}
                                            className={`${seller.isVerified === true ? 'text-black animate-bounce' : 'btn bg-green-600 text-white btn-xs'}`}>
                                            {
                                                seller.isVerified === true ? "Verified" : 'Verify seller'
                                            }
                                        </button>
                                    </td>

                                    <th>
                                        <button onClick={() => handleDelete(seller._id)} className="btn bg-primary btn-ghost btn-xs px-4 text-white  ">Delete seller</button>
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

export default Allseller;
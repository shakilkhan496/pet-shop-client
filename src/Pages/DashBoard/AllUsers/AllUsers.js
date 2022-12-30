import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: allUser = [], refetch } = useQuery({
        queryKey: ['allUser'],
        queryFn: () => fetch(` http://localhost:5000/allUser`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            fetch(` http://localhost:5000/deleteUser`, {
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
                        toast.success('User deleted successfully');
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
                                <th>user name</th>
                                <th>Email</th>

                                <th>Action</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allUser?.map((user, idx) => <tr key={idx}>
                                    <th>
                                        <label>
                                            {idx + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <h1>{user.name}</h1>
                                    </td>
                                    <td>
                                        <p>{user.email}</p>
                                    </td>

                                    <th>
                                        <button onClick={() => handleDelete(user._id)} className="btn bg-primary btn-ghost btn-xs px-4 text-white  ">Delete user</button>
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

export default AllUsers;
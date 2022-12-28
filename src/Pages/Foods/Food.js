import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';


const Food = () => {

    const { data: foodData = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`http://localhost:5000/foods`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })



    return (
        <div className='min-h-screen'>
            <div>
                <div>

                </div>
                {
                    isLoading ?
                        <Loading></Loading>
                        :
                        <div className='grid gap-0 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-items-center'>
                            {
                                foodData.map((food, idx) =>
                                    <div key={idx} className="card lg:w-[300px] lg:h-[400px] lg:scale-75 scale-90 bg-base-100 shadow-xl">
                                        <figure><img className='lg:h-[200px] h-[200px]' src={food.img} alt="Shoes" /></figure>
                                        <div className="card-body hover:scale-110 transition">
                                            <h2 className="card-title text-2xl">
                                                {food.title}
                                            </h2>
                                            <p className='font-semibold'>{food.description}</p>
                                            <p className='text-primary font-bold'>Price : {food.price} $</p>
                                            <button className='btn btn-sm bg-secondary text-black hover:text-white'>Add to Cart</button>
                                            <Link to={food.title} className='btn btn-sm bg-primary mt-2 text-white hover:text-white'>See details</Link>

                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Cat food</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Food;
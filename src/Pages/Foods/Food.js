import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import { PhotoView } from 'react-photo-view';


const Food = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isAdmin] = useAdmin(user?.email);
    const { data: foodData = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(` https://pet-shop-server.vercel.app/foods`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })



    const [cart, setCart] = useState({});
    console.log(cart);
    const handleCart = (_id) => {
        fetch(`https://pet-shop-server.vercel.app/foods/${_id}`)
            .then(res => res.json())
            .then(data => {
                setCart(data)
                const cartData = {
                    email: user?.email,
                    productId: cart._id,
                    title: cart.title,
                    price: cart.price,
                    img: cart.img,
                    id: cart._id,
                }

                if (user?.email) {
                    fetch('https://pet-shop-server.vercel.app/cart', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('token')}`
                        }
                        ,
                        body: JSON.stringify(cartData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                toast.success('Added to cart successfully')
                                refetch();
                            }
                            return
                        })
                        .catch(err => {
                            toast.error(`${err}`)
                        })

                }
                else {
                    toast.error(`You must need to login to add to cart`)
                    navigate('/login')
                }

            })



    }



    return (
        <div className='min-h-screen'>
            <div

            >
                <div>

                </div>
                {
                    isLoading ?
                        <Loading></Loading>

                        :
                        <div className='grid gap-0 transition lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-items-center'>
                            {
                                foodData.map((food, idx) =>
                                    <div



                                        key={idx} className="card lg:w-[300px] lg:h-[500px] lg:scale-90 scale-90 bg-base-100 shadow-xl">
                                        <figure>
                                            <PhotoView src={food.img}>
                                                <img

                                                    className='lg:h-[200px] h-[200px]' src={food.img} alt="Shoes" />
                                            </PhotoView>
                                        </figure>
                                        <div className="card-body hover:scale-110 transition">
                                            <h2 className="card-title text-2xl">
                                                {food.title}
                                            </h2>
                                            <p className='font-semibold'>{food.description}</p>
                                            <p className='text-primary font-bold'>Price : {food.price} $</p>
                                            <button disabled={isAdmin} onClick={() => handleCart(food._id)} className='btn btn-sm bg-secondary text-black hover:text-white'>Add to Cart</button>
                                            <Link to={food._id} className='btn btn-sm bg-primary mt-2 text-white hover:text-white'>See details</Link>

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
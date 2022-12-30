import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import useTitle from '../hooks/useTitle';
import Footer from '../shared/Footer';
import NavBar from '../shared/NavBar';

const DashBoard = () => {
    useTitle('Dashboard');
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email);
    const [isUser] = useBuyer(user.email);
    return (
        <div className=' mx-auto'>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 lg:w-60 w-40 bg-white text-black  ">
                        {
                            isAdmin && <>
                                <li><Link to={`/dashboard/allSellers`} className='btn  hover:outline-primary btn-ghost'>All Sellers</Link></li>
                                <li><Link to={`/dashboard/reportedItems`} className='btn  hover:outline-primary btn-ghost'>Reported Items</Link></li>
                                <li><Link to={`/dashboard/allUsers`} className='btn  hover:outline-primary btn-ghost'>All Buyers</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li><Link to={`/dashboard/myProducts`} className='btn  hover:outline-primary btn-ghost'>My Foods</Link></li>
                                <li><Link to={`/dashboard/addProducts`} className='btn  hover:outline-primary btn-ghost'>Add Foods</Link></li>
                            </>
                        }



                        {
                            isUser &&
                            <>
                                <li><Link to={`/dashboard`} className='btn  hover:outline-primary btn-ghost'>My orders</Link></li>
                                <li><Link to={`/dashboard/cart`} className='btn  hover:outline-primary btn-ghost'>My Cart</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default DashBoard;
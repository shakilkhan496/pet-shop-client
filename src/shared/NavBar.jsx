import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logoo from '.././assets/vector/s shape.png'
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import useAdmin from '../hooks/useAdmin';
import { useQuery } from '@tanstack/react-query';


const NavBar = () => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [linkState, setLinkState] = useState('');
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isUser] = useBuyer(user?.email);


    useEffect(() => {
        if (isUser) {
            setLinkState('/dashboard')
        }
        if (isAdmin) {
            setLinkState('/dashboard/allSellers')
        }
        if (isSeller) {
            setLinkState('/dashboard/myProducts')
        }
    }, [isSeller, isAdmin, isUser])


    const toggleMenu = () => {
        setIsMenuCollapsed(!isMenuCollapsed)
    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('token');
                toast.success('Logged out');
            })
    }



    const { data: myCart = [], } = useQuery({
        queryKey: ['myCart'],
        queryFn: () => fetch(`https://pet-shop-server.vercel.app/cart?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })


    const menuItems = <>

        <Link to='/food' className='btn-ghost hover:scale-105 btn font-bold normal-case text-sm'>Foods</Link>
        <Link className='btn-ghost btn font-bold hover:scale-105 normal-case text-sm' to='/hotels'>Hotels</Link>
        <Link className='btn-ghost btn font-bold hover:scale-105 normal-case text-sm' to='/care' >Care</Link>
        {
            !user?.uid ?
                <Link to='/login' className='btn bg-gradient-to-t from-primary to-accent text-xl text-white normal-case font-bold hover:scale-105'>Login</Link>
                :
                <>
                    <Link className='font-semibold' to={linkState}>Dashboard</Link>
                    <Link className='text-xs  font-bold bg-primary  text-white px-3 py-3 rounded-2xl '>{user?.displayName || 'Admin mode'}</Link>
                    <div className="dropdown dropdown-end">
                        <label className="btn bg-black btn-circle ">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item bg-red-600">{
                                    myCart.length
                                }</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogOut} className='btn bg-gradient-to-t from-primary to-accent text-xl text-white normal-case font-bold hover:scale-105'>Log out</button>

                </>
        }
    </>
    const title = <>
        <div className='flex items-center justify-center'>
            <div className='flex img'>
                <img className='w-16 -rotate-90 translate-x-4' src={logoo} alt="" />
            </div>
            <Link to='/' class="hover:scale-105 nav-title-text hover:skew-x-6 transition normal-case  text-[40px] font-extrabold"><h1>PetShop</h1></Link>
        </div>
    </>
    return (
        <div
            style={{ backdropFilter: 'blur(8px)' }} className=' from-[#e3a9f23c] to-[#ffc35c43] bg-gradient-to-r  sticky top-0 z-50 '>
            <nav className='hidden  lg:block shadow'>
                <div class="flex items-center px-10 justify-between ">
                    {title}
                    <div className='space-x-3'>
                        {
                            menuItems
                        }
                    </div>
                </div>
            </nav>
            <nav className='lg:hidden p-1 md:block sm:block '>


                <div className='flex items-center'>
                    <button onClick={toggleMenu} className="btn text-xl btn-outline ml-1  btn-square btn-ghost">
                        {
                            isMenuCollapsed === true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> : 'x'
                        }
                    </button>
                    <div>
                        {title}
                    </div>

                </div>

                {!isMenuCollapsed && (
                    <ul className='flex flex-col'>
                        {menuItems}
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default NavBar;
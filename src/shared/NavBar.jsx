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
                toast.success('Logged out')
            })
    }


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
                    <Link className='text-xs lg:p-4 p-2 sm:w-28 md:mb-2 mb-2 lg:mb-0 font-bold bg-primary rounded-full text-white px-3 mr-2 '>{user?.displayName || 'Admin mode'}</Link>
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
            style={{ backdropFilter: 'blur(5px)' }} className=' from-secondary to-transparent  sticky top-0 z-50 '>
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
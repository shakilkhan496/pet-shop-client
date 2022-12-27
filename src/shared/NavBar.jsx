import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logoo from '.././assets/vector/s shape.png'
import { AuthContext } from '../contexts/AuthProvider';
import { toast } from 'react-hot-toast';


const NavBar = () => {
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
    const { user, logOut } = useContext(AuthContext);

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

        <p className='btn-ghost hover:scale-105 btn font-bold normal-case text-sm'><Link>Foods</Link></p>
        <p className='btn-ghost btn font-bold hover:scale-105 normal-case text-sm'><Link>Hotels</Link></p>
        <p className='btn-ghost btn font-bold hover:scale-105 normal-case text-sm'><Link>Care</Link></p>
        {
            !user?.email ?
                <Link to='/login' className='btn bg-gradient-to-t from-primary to-accent text-xl text-white normal-case font-bold hover:scale-105'>Login</Link>
                :
                <button onClick={handleLogOut} className='btn bg-gradient-to-t from-primary to-accent text-xl text-white normal-case font-bold hover:scale-105'>Log out</button>
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
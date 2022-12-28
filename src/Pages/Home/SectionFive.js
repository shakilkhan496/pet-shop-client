import React from 'react';
import './SectionFive.css';
import profile from '../.././assets/profile/Ellipse 2.png';
import food1 from '../.././assets/foodCat/Rectangle (1).png';
import food2 from '../.././assets/foodCat/Rectangle 97 (1).png';
import food3 from '../.././assets/foodCat/Rectangle 97 (2).png';
import food4 from '../.././assets/foodCat/Rectangle 97 (3).png';
import food5 from '../.././assets/foodCat/Rectangle 97.png';
import { Link } from 'react-router-dom';

const SectionFive = () => {
    return (
        <div className='lg:flex p-10'>
            <section
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='flex-1'>
                <div className='lg:translate-x-[200px] mb-10 lg:translate-y-[220px]'>
                    <h1
                        style={{
                            transitionDuration: '.8s'
                        }}
                        className="text-7xl hover:-skew-x-6 hover:translate-x-6 text-[#FFC73B] font-bold">Pet Cafe</h1>
                    <p className="py-6 font-semibold text-xl">A cozy place for you to hangout <br /> with friends and pets</p>
                    <button className="px-[50px] btn-five hover:bg-accent hover:scale-110 transition rounded-[67px] normal-case text-xl shadow  h-[60px] w-fit text-white">
                        <Link to='/food' className='flex'>
                            <h1>Foods & Beverage</h1>
                        </Link>
                    </button>
                </div>

            </section>
            <section
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='flex-1 lg:scale-75 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <div>
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl w-full " style={{ backgroundImage: `url('${food1}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="mt-[280px] w-[300px]  mb-3 flex">
                                <img src={profile} alt="" />
                                <div className='text-white'>
                                    <h2>@diana</h2>
                                    <p>12/12/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl " style={{ backgroundImage: `url('${food2}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="mt-[280px] mb-3 flex">
                                <img src={profile} alt="" />
                                <div className='text-white'>
                                    <h2>@diana</h2>
                                    <p>12/12/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${food3}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="mt-[280px] mb-3 flex">
                                <img src={profile} alt="" />
                                <div className='text-white'>
                                    <h2>@diana</h2>
                                    <p>12/12/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${food4}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="mt-[280px] mb-3 flex">
                                <img src={profile} alt="" />
                                <div className='text-white'>
                                    <h2>@diana</h2>
                                    <p>12/12/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${food5}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="mt-[280px] mb-3 flex">
                                <img src={profile} alt="" />
                                <div className='text-white'>
                                    <h2>@diana</h2>
                                    <p>12/12/2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default SectionFive;













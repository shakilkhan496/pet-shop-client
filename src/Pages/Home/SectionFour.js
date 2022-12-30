import React, { useState } from 'react';
import img1 from '../.././assets/cat/Rectangle (1).png'
import img2 from '../.././assets/cat/Rectangle 97 (1).png'
import img3 from '../.././assets/cat/Rectangle 97 (2).png'
import img4 from '../.././assets/cat/Rectangle 97 (3).png'
import profile from '../.././assets/profile/Ellipse 2.png'
import './sectionFour.css'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const SectionFour = () => {
    const [value, onChange] = useState(new Date());
    const [booked, setBooked] = useState('');
    const handleBook = () => {
        setBooked(value);
    }
    console.log(booked);
    return (
        <div className='lg:flex p-10'>
            <section
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='flex-1 mb-10 lg:scale-75 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <div>
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="hero hover:scale-110 transition duration-700 rounded-3xl h-full " style={{ backgroundImage: `url('${img1}')` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className=" text-center text-neutral-content">
                            <div className="mt-[280px]  mb-3 flex">
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
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="hero hover:scale-110 transition duration-700 rounded-3xl " style={{ backgroundImage: `url('${img2}')` }}>
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
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${img3}')` }}>
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
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${img4}')` }}>
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
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${img1}')` }}>
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
            <section
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='flex-1 flex flex-col items-center justify-center lg:p-10'>
                <div className='space-y-10'>
                    <h1

                        className=' lg:text-7xl hover:-skew-x-6 hover:translate-x-3 transition duration-500 text-5xl font-bold text-primary'>Pet Hotel</h1>
                    <p
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                        className='text-xl font-semibold'>A cozy hotel for your pet. <br /> We bet they’re not gonna miss you</p>
                </div>
                <div className='mt-10'>
                    <button className="px-[50px] bg-primary btn-four hover:bg-accent hover:scale-110 transition rounded-[67px] normal-case text-xl shadow  h-[60px] w-fit text-white">
                        <Link to='/hotels' className='flex'>
                            <h1>Book a hotel</h1>
                        </Link>
                    </button>

                </div>
            </section>
        </div>
    );
};

export default SectionFour;
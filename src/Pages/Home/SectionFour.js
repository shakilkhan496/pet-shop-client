import React, { useState } from 'react';
import img1 from '../.././assets/cat/Rectangle (1).png'
import img2 from '../.././assets/cat/Rectangle 97 (1).png'
import img3 from '../.././assets/cat/Rectangle 97 (2).png'
import img4 from '../.././assets/cat/Rectangle 97 (3).png'
import profile from '../.././assets/profile/Ellipse 2.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl h-full " style={{ backgroundImage: `url('${img1}')` }}>
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
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl " style={{ backgroundImage: `url('${img2}')` }}>
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
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${img3}')` }}>
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
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${img4}')` }}>
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
                    <div className="hero hover:scale-110 transition duration-700 rounded-3xl" style={{ backgroundImage: `url('${img1}')` }}>
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
                    <h1 className=' lg:text-7xl text-5xl font-bold text-primary'>Pet Hotel</h1>
                    <p className='text-xl font-semibold'>A cozy hotel for your pet. <br /> We bet they’re not gonna miss you</p>
                </div>
                <div className=' mt-10 rounded-xl duration-1000 lg:hover:scale-125 shadow-xl lg:hover:shadow-purple-500 lg:hover:-translate-x-52 transition'>
                    <Calendar className='' onChange={onChange} value={value} />
                    <button onClick={handleBook} className=' text-center text-white btn w-full bg-gradient-to-r from-primary to-secondary text-xl font-bold'>Book Now</button>

                </div>
            </section>
        </div>
    );
};

export default SectionFour;
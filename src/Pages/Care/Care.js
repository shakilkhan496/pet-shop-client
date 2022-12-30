import React from 'react';
import { Link } from 'react-router-dom';
import cat from '../.././assets/3D cat/cat standing.png';
import doctor1 from '../.././assets/doctors/emin-baycan-AMIghdyjDQo-unsplashsdf.jpg';
import doctor2 from '../.././assets/doctors/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg';
import doctor3 from '../.././assets/doctors/portrait-doctor.jpg';
import doctor4 from '../.././assets/doctors/portrait-smiling-male-doctor.jpg';


const doctorsData = [
    {
        img: doctor1,
        name: 'James',
        details: 'Anesthesiology and analgesia specialist'
    }
    ,
    {
        img: doctor2,
        name: 'Mary',
        details: 'Bacteriology and mycology specialist'
    }
    ,
    {
        img: doctor3,
        name: 'Jennifer',
        details: 'Emergency and critical care'
    }
    ,
    {

        img: doctor4,
        name: 'Michael',
        details: 'Toxicology specialist'
    }
]


const Care = () => {
    return (
        <div className='p-5'>
            <section
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="200"
                className='lg:flex lg:min-h-screen items-center justify-center'>
                <div

                    className='flex-1 flex flex-col lg:pl-[145px] justify-around'>
                    <h1

                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="200"


                        style={{
                            transitionDuration: '.8s'
                        }}
                        className="lg:text-7xl text-4xl hover:-skew-x-6 hover:translate-x-6 text-[#41EAC1] font-bold">Meet our best Doctors <br /> for your pet.</h1>
                    <p className="py-6 text-xl">24/7 Support from us <br /> with cheapest call rate. <br /> Book your medical call now. </p>
                    <div className="px-[50px] cursor-help btn-custom  rounded-[67px] normal-case text-xl shadow  py-[18px] w-fit text-white">
                        <div className='flex justify-center items-center space-x-3'>
                            <h1>Book your Doctor now</h1>
                        </div>
                    </div>
                </div>
                <div className='flex-1 mt-5'>
                    <div className="chat lg:scale-75 lg:translate-y-10 lg:-translate-x-[350px] chat-end">
                        <div className="chat-bubble bg-primary text-white text-xl">I am sick, Book a best for me <br /> please!</div>
                    </div>
                    <img className='w-[60%] translate-x-[80%] hover:scale-110 transition duration-700 lg:translate-x-[200px]' src={cat} alt="" />
                </div>
            </section>
            <section
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="200"

                className='mt-10'>

                <div
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="500"
                >
                    <h1 className='text-4xl text-primary text-center font-semibold'>Our heros</h1>
                </div>
                <div className='mt-10'>
                    <div className='grid lg:grid-cols-3 justify-items-center  gap-5 lg:scale-90 md:grid-cols-2 grid-cols-1'>
                        {
                            doctorsData.map((doctor, idx) =>
                                <div className="scale-90">
                                    <div className=" bg-base-200 cursor-help p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-110 transition duration-500">
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-easing="linear"
                                            data-aos-duration="200"
                                            alt='' src={doctor.img} className="max-w-sm lg:w-[500px] rounded-lg shadow-2xl" />
                                        <div>
                                            <h1 className="text-4xl font-bold">{doctor.name}</h1>
                                            <p className="py-3 text-black text-xl">{doctor.details}</p>
                                            <Link className="btn btn-primary normal-case text-xl">See details</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Care;
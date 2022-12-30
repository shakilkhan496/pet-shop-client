import React from 'react';
import './SectionTwo.css';
import catEating from '../.././assets/images/cat eating.png';
import dogEating from '../.././assets/images/dog eating.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import brand1 from '../.././assets/brand/image 1 (1).png';
import brand12 from '../.././assets/brand/image 1 (2).png';
import brand4 from '../.././assets/brand/image 1.png';

const brands = [
    {
        img: brand1
    },
    {
        img: brand12,
    },
    {
        img: brand4,
    },
    {
        img: brand1
    },
    {
        img: brand12,
    },
    {
        img: brand4,
    }
]





const SectionTwo = () => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
            className='py-10 px-[5%] secTwoBg' >
            <div

                className=' mx-auto space-y-3 custom-shadow  lg:px-20 px-5 py-10 rounded-3xl lg:rounded-[100px]  section-two-main'>
                <section className='lg:flex lg:ml-[80px] mb-10 items-center justify-center justify-items-center'>
                    <div
                        style={{
                            transitionDuration: '.8s'
                        }}
                        className='flex-1 transition hover:scale-110 hover:translate-x-10 hover:skew-x-6'>
                        <h1

                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="200"
                            className='secTwo-title md:text-center lg:text-left mt-10 lg:text-6xl text-5xl'>Proper Food <br /> For your <br /> Pets</h1>
                    </div>
                    <div

                        className='flex-1 lg:flex-col md:flex md:justify-around '>
                        <img


                            style={{ transitionDuration: '.8s' }} className='w-[240px] shadow-2xl hover:scale-110 transition hover:-translate-x-20 imgOne' src={dogEating} alt="" />
                        <img

                            style={{ transitionDuration: '.8s' }} className='w-[240px] mt-5 md:mt-0  shadow-xl imgTwo lg:-mt-[100px] lg:ml-[20%] hover:scale-110 transition hover:translate-x-20 ' src={catEating} alt="" />
                    </div>

                </section>
                <section
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                    className='bg-white hidden lg:block md:block rounded-3xl shadow-lg '>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        // modules={[Pagination]}
                        className="mySwiper cursor-grab s"
                    >
                        {
                            brands.map((x, idx) =>
                                <SwiperSlide className='shadow-xl  hover:shadow-2xl'
                                    key={idx}

                                >
                                    <img
                                        data-aos="zoom-in"
                                        data-aos-easing="linear"
                                        data-aos-duration="200"
                                        style={{
                                            transitionDuration: '.8s'
                                        }}
                                        className='hover:skew-x-3 hover:scale-110 hover:-translate-x-6 transition' src={x.img} alt="" />
                                </SwiperSlide>)
                        }

                    </Swiper>

                </section>
            </div>
        </div>
    );
};

export default SectionTwo;
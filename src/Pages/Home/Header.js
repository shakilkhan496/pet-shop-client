import React from 'react';
import './Header.css';
import dogStandingImg from '../../assets/images/dog sitting.png';
import cat from '../../assets/images/lying cat.png';
import vector from '../../assets/vector/Rectangle.png';
import sShape from '../../assets/vector/s shape.png';
import { useState } from 'react';


const Header = () => {
    // const [isStart, setStart] = useState(true);
    // const toggleMenu = () => {
    //     setStart(!isStart);
    // }
    // setInterval(() => {
    //     toggleMenu();
    // }, 1100);

    return (
        <div

            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"

            className='bg-custom'>
            <div className='lg:flex  pt-[150px]'>
                <div
                    data-aos="fade-up-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className=' flex-1'>
                    <img

                        style={{ transitionDuration: '.8s' }}
                        className='lg:w-[300px] w-[200px] hover:scale-110 hover:translate-x-5 lg:mt-[170px] ml-[100px]' src={dogStandingImg} alt="" />
                </div>
                <div className=' lg:mx-0 mx-2 lg:text-left text-center font-bold lg:text-7xl text-6xl lg:w-[700px] header-custom'>
                    <img style={{
                        transitionDuration: '1s'
                    }} className={

                        `
                        hidden  w-60 lg:block absolute top-[200px] left-[500px]
                        hover:skew-x-12 hover:translate-y-11 hover:transition hover:translate-x-[100px]
                        `


                    }
                        src={sShape} alt="" />
                    <h2

                        className='lg:mt-[350px] lg:ml-[20px]'>
                        We Care your <br /> Emotions <br /> same way as you
                    </h2>
                </div>
                <div

                    className=' lg:flex-1'>
                    <img

                        style={{
                            transitionDuration: '1s'
                        }}
                        className='lg:relative lg:top-5
                        pl-[25px]
                     hover:skew-x-12 hover:translate-y-11 hover:transition hover:translate-x-[-100px]
                     hidden lg:block' src={vector} alt="" />
                    <img
                        style={{
                            transitionDuration: '1s'
                        }}
                        className='lg:translate-x-0 md:w-[400px] md:translate-x-[365px] lg:pt-[35px] hover:scale-110 hover:-translate-x-5' src={cat} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Header;
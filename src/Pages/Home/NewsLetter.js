import React from 'react';
import './Style.css';
import mail from '../.././assets/icon/mail.png';
import vector from '../.././assets/vector/Rectangle (1).png'

const NewsLetter = () => {
    return (
        <div className='lg:px-10 py-20'>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='newsLetter-bg flex h-[500px]'>
                <div className='flex-1 px-3 lg:ml-[100px] flex flex-col items-center justify-center'>
                    <h1 className='lg:text-4xl text-3xl text-center text-white'>Subscribe to our Newsletter</h1>
                    <h1 className='lg:text-5xl text-4xl font-bold text-center text-white'>For our Promos and Benefits</h1>
                    <form className='flex items-center justify-center' action="">
                        <input type="text" placeholder="Your email address" className="input mt-5 h-[60px] input-bordered lg:w-[600px] " />
                        <button className='bg-[#9747FF] h-[60px] px-3 rounded-r-2xl mt-5'>
                            <div>
                                <img src={mail} alt="" />
                            </div>
                        </button>
                    </form>
                </div>
                <div className='hidden lg:block'>
                    <img src={vector} className='w-[450px]' alt="" />

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
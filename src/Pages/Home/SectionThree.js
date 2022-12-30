import React from 'react';
import './SecTionThree.css';
import catLayer1 from '../.././assets/images/catSawar.png';
import dogSwar from '../.././assets/images/dogSawar.png';
import callLogo from '../.././assets/icon/Vector.png';
import CallModal from '../../Modal/CallModal';


const SectionThree = () => {
    return (
        <div

            className='py-10'>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className="hero">
                <div className="hero-content justify-center items-center flex-col lg:flex-row-reverse">
                    <div className='flex-1 lg:flex  items-center justify-center'>

                        <img

                            style={{
                                transitionDuration: '.8s'
                            }}
                            src={dogSwar} alt='' className=" w-[150px] hover:skew-x-6 hover:-translate-x-4 transition lg:mt-[380px] ring-2 ring-offset-2 ring-[#41EAC1] rounded-full shadow-2xl" />
                        <img

                            style={{
                                transitionDuration: '.8s'
                            }}
                            src={catLayer1} alt='' className="ring-2
                             hover:skew-y-6 hover:-translate-x-4 hover:-translate-y-4 transition
                             ring-offset-2 ring-[#ffffff] w-[250px] rounded-[304.5px] shadow-2xl" />

                    </div>
                    <div className='flex-1 flex flex-col lg:pl-[145px] justify-around'>
                        <h1

                            style={{
                                transitionDuration: '.8s'
                            }}
                            className="text-7xl hover:-skew-x-6 hover:translate-x-6 text-[#41EAC1] font-bold">Grooming</h1>
                        <p
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="200"
                            className="py-6 text-xl">However not all animals enjoy the grooming <br /> process and many owners find that it <br /> is easier to send their pet to a <br /> professional groomer on a regular basis instead.</p>
                        <label

                            htmlFor="my-modal-3" className="px-[50px] cursor-pointer btn-custom hover:bg-accent hover:scale-110 transition rounded-[67px] normal-case text-xl shadow  py-[18px] w-fit text-white">
                            <div className='flex justify-center items-center space-x-3'>
                                <img className='w-[20px]' src={callLogo} alt="" />
                                <h1>Schedule a Call</h1>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <CallModal></CallModal>
        </div>
    );
};

export default SectionThree;
import React from 'react';
import dogImg from '../../../src/assets/images/dog-with-bag.png';
import circleVector from '../.././assets/vector/Ellipse 4.png';
import petFood from '../../../src/assets/icon/petfood.png';
import grooming from '../../../src/assets/icon/Grooming.png';
import hotelStar from '../../../src/assets/icon/Hotel Star.png';
import pets from '../../../src/assets/icon/Pets.png';


const petData = [
    {
        img: petFood,
        des: 'Best foods for your pet at cheapest price . And quality products always .Get the best food from us',
        title: 'Pet Food'
    },
    {
        img: grooming,
        des: 'Best foods for your pet at cheapest price . And quality products always .Get the best food from us',
        title: 'Pet Grooming'
    }
    ,
    {
        img: hotelStar,
        des: 'Best foods for your pet at cheapest price . And quality products always .Get the best food from us',
        title: 'Pet Hotel'
    }
    ,
    {
        img: pets,
        des: 'Best foods for your pet at cheapest price . And quality products always .Get the best food from us',
        title: 'Pet Cafe'
    }

]


const SectionOne = () => {
    return (
        <div className='lg:px-16 px-5 my-16'>
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
            >
                <h1 className='text-center py-[50px] lg:text-[40px] text-4xl mt-5 font-bold  text-primary'>Everything you need, <br /> all in one piece!</h1>
            </div>

            <section className='lg:flex mt-10  items-center justify-items-center'>
                <div
                    data-aos="fade-up-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <img className='w-[100vw]
                    hover:-rotate-12
                     hover:skew-x-3 hover:-translate-x-3 hover:-translate-y-3 hover:scale-110 transition' src={dogImg} alt="" />
                    <img
                        style={{
                            transitionDuration: '2s',
                            cursor: 'crosshair'
                        }}
                        className='w-[200px] hover:translate-x-[400px] hidden md:hidden lg:block transition hover:-translate-y-[100px]' src={circleVector} alt="" />
                </div>
                <div className='grid gap-6 lg:grid-cols-2 grid-cols-1'>


                    {
                        petData.map((pet, idx) =>
                            <div
                                style={
                                    {
                                        transitionDuration: '.7s'
                                    }
                                }



                                key={idx}
                                className='p-4
                                hover:skew-x-3
                                hover:translate-x-3
                                hover:rotate-3
                                 shadow hover:shadow-2xl transition rounded-3xl'>
                                <div className='flex items-center space-x-4'>
                                    <div>
                                        <img
                                            data-aos="zoom-in"
                                            data-aos-easing="linear"
                                            data-aos-duration="200"

                                            style={{
                                                transitionDuration: '1s'
                                            }} className='rounded-full hover:rotate-45 transition' src={pet.img} alt="" />
                                    </div>
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-easing="linear"
                                        data-aos-duration="200"
                                    >
                                        <h3 className='text-[30px] font-semibold text-accent text-center'>{pet.title}</h3>
                                    </div>
                                </div>
                                <div className='mt-3'

                                    data-aos="zoom-in"
                                    data-aos-easing="linear"
                                    data-aos-duration="200"
                                >
                                    <p className='text-[20px]'>{pet.des}</p>
                                </div>
                            </div>
                        )
                    }



                </div>

            </section>



        </div>
    );
};

export default SectionOne;
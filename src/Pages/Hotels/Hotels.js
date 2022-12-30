import React from 'react';
import { Link } from 'react-router-dom';
import img from '../.././assets/Hotels/939_KOFUKU004.webp';
import cat from '../.././assets/3D cat/cat in box.png';




const hotelData = [
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }
    ,
    {
        img: img,
        title: 'Hotel TONGO',
        description: 'Best hotel for your cat',
        price: '200',
    }

]



const Hotels = () => {

    return (
        <div>
            <div

                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="200"
                className=''>
                <div>
                    <div>
                        <h1 className='text-center py-10 text-4xl font-semibold text-primary'>Find your location here</h1>
                    </div>
                    <div className='grid lg:grid-cols-2 lg:scale-75 justify-items-center'>
                        <div class="mapouter  hover:scale-125 transition duration-500 z-50"><div className="gmap_canvas"><iframe width="618" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                        </div>
                        </div>
                        <div>
                            <div className="chat chat-end ">
                                <div className="chat-bubble bg-primary lg:-translate-x-[350px] text-xl text-white lg:translate-y-[100px]">Looking hotel <br /> for me?</div>
                            </div>
                            <img className='lg:translate-x-[200px] lg:translate-y-[100px] hover:scale-105 transition duration-500' src={cat} alt="" />
                        </div>

                    </div>
                    <div>
                        <h1 className='text-center py-10 text-4xl font-semibold text-primary'>Hotels</h1>
                    </div>
                    <div

                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="200"
                        className='grid gap-0 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 justify-items-center'>
                        {
                            hotelData.map((hotel, idx) =>
                                <div key={idx} className="card  lg:scale-75 scale-90 bg-base-100 shadow-xl">
                                    <figure><img className='' src={hotel.img} alt="Shoes" /></figure>
                                    <div className="card-body hover:scale-110 transition">
                                        <h2 className="card-title text-2xl">
                                            {hotel.title}
                                        </h2>
                                        <p className='font-semibold'>{hotel.description}</p>
                                        <p className='text-primary font-bold'>Price : <span className='text-2xl'>{hotel.price} $</span> / day</p>
                                        <button className='btn btn-sm bg-secondary text-black hover:text-white'>Add to wishlist</button>
                                        <Link to={hotel.title} className='btn btn-sm bg-primary mt-2 text-white hover:text-white'>Book now</Link>

                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">Cat hotel</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hotels;
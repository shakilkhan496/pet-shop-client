import React from 'react';
import './Style.css';
import mail from '../.././assets/icon/mail.png';
import vector from '../.././assets/vector/Rectangle (1).png';
import { async } from '@firebase/util';
import { useState } from 'react';


const FORM_URL = `https://app.convertkit.com/forms/3905087/subscriptions`;

const NewsLetter = () => {
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()

        const form = event.target;
        const data = form.email.value;

        try {
            const response = await fetch(FORM_URL, {
                method: "post",
                body: data,
                headers: {
                    accept: "application/json",
                },
            })

            setEmail("")
            const json = await response.json()

            if (json.status === "success") {
                setStatus("SUCCESS")
                return
            }
        } catch (err) {
            setStatus("ERROR")
            console.log(err)
        }
    }



    return (
        <div className='lg:px-10 py-20'>
            {
                status === "SUCCESS" ?
                    <div className='flex flex-col items-center justify-center'>
                        Thank you for your subscription
                    </div> : null
            }
            <div
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='newsLetter-bg flex h-[500px]'>
                <div className='flex-1 px-3 lg:ml-[100px] flex flex-col items-center justify-center'>
                    <h1 className='lg:text-4xl text-3xl text-center text-white'>Subscribe to our Newsletter</h1>
                    <h1 className='lg:text-5xl text-4xl font-bold text-center text-white'>For our Promos and Benefits</h1>
                    <form onSubmit={handleSubmit} className='flex items-center justify-center' action="">
                        <input name='email' type="text" placeholder="Your email address" className="input mt-5 h-[60px] input-bordered lg:w-[600px] " />
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
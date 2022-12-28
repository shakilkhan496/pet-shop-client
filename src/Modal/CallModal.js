import React, { } from 'react';


const CallModal = () => {


    const handleCall = (e) => {

        e.preventDefault();
        const form = e.target;
        const number = form.number.value;
        const message = form.message.value;

        const callData = {
            number,
            message
        }
        console.log(callData);


    }



    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal backdrop-blur">
                <div className="modal-box lg:max-w-full w-[90%] lg:w-[70%] relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm bg-red-600 text-white btn-circle absolute right-2 top-2">✕</label>
                    <section className='hero'>
                        <div
                        >
                            {/* {
                loading ? <Loading></Loading> : */}

                            <div className=" ">
                                <div className="card ">
                                    <h1 className="text-3xl mt-10 text-center  font-semibold">Schedule a Call</h1>
                                    <form onSubmit={handleCall} className='mt-3 space-y-3'>
                                        <div>
                                            <p>Your Phone number</p>
                                            <input name='number' type="number" placeholder="Enter your phone number" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div>
                                            <p>Your message</p>
                                            <textarea name='message' className="textarea lg:w-[300px] textarea-warning" placeholder="Send us your message if you have."></textarea>
                                        </div>
                                        <button className='btn btn-primary'>Send</button>
                                    </form>
                                </div>
                            </div>
                            {/* } */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CallModal;






{/* <form onSubmit={handleSubmit} className="card-body lg:w-96">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input name='email' type="email" placeholder="email" className="input input-bordered" />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input name='password' type="password" placeholder="password" className="input input-bordered" />
    </div>
    <div className='text-sm '>
        <p>New to our website?</p> <p className='text-primary pt-5 hover:link   ' ><Link className='animate-pulse text-2xl ' to='/signup'>Register now</Link></p>
    </div>
    <div className='text-red-600 m-4'>
        {/* <p>{err}</p> */}
//     </div>
//     <div className="form-control mt-6">
//         <button className="btn btn-primary">
//             Sign in
//         </button>
//     </div>
// </form> */}
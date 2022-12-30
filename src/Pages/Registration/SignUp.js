import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';


const SignUp = () => {
    useTitle('signup');
    const [err, setErr] = useState('');
    const { updateUserProfile, createUser, loading, setLoading } = useContext(AuthContext);
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, location, token, navigate])


    const handleSubmit = (e) => {
        // setErr('')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const slot = form.slot.value;
        const userData = {
            name: name,
            email: email,
            slot: slot
        }
        createUser(email, password)
            .then(data => {

                updateUserProfile(name)
                const user = data.user;

                toast.success(`Signed up as ${user.email}`)
                form.reset();

                fetch(' http://localhost:5000/users', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then((data) => {

                        setCreatedUserEmail(email);
                    })

            })
            .catch(err => {
                setErr(err.message)
                toast.error(err.message);
                setLoading(false);
            })
    }



    return (
        <div className="hero min-h-screen">
            {
                loading ? <Loading></Loading>
                    :

                    <div

                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="700"
                        className="hero-content flex-col">
                        <div className="text-center lg:text-left">

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <h1 className="text-2xl mt-10 text-center   font-semibold">Register</h1>

                            <form onSubmit={handleSubmit} className="card-body lg:w-96">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="name" className="input input-bordered" />
                                </div>

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

                                <div className="form-control">
                                    <select name='slot' defaultValue={'User'} className='input-bordered input'>
                                        <option value='user'>buyer</option>
                                        <option value='seller'>Seller</option>
                                    </select>
                                </div>

                                <div className='text-red-600'>
                                    <p>{err}</p>
                                </div>

                                <div className='text-sm '>
                                    <p>Already have an account?</p> <p className='text-primary text-xl hover:link   ' ><Link className='animate-pulse' to='/login'>Login</Link></p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Signup</button>
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SignUp;
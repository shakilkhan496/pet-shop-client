import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import catLogin from '../.././assets/3D cat/top view of cat lying on back.png'
import Loading from '../../components/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import useToken from '../../hooks/useToken';


const Login = () => {
    useTitle('login')
    const { googleSignIn, setLoading, user, loading, emailSignIn } = useContext(AuthContext);
    const [err, setErr] = useState();
    const [loginEmail, setLoginEmail] = useState('');
    const [token] = useToken(loginEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [from, location, token, navigate])



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailSignIn(email, password)
            .then(res => {
                const user = res.user;

                toast.success(`Log in successfully`);
                setLoginEmail(user.email);

            })
            .catch(err => {
                toast.error(err.message);
                setErr(err.message);
                setLoading(false)
            })


    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                const user = res.user;

                const userdata = {
                    name: user.displayName,
                    email: user.email,
                    slot: 'user'
                }
                fetch(' http://localhost:5000/users', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userdata)
                })
                    .then(res => res.json())
                    .then((data) => {

                        setLoginEmail(user.email);
                        toast.success('Login successful');
                    })
            })
            .catch(console.error)
    }



    return (
        <div className='lg:flex justify-center items-center'>
            <section className='flex-1'>
                <div
                    data-aos="fade-up-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                >
                    <div className=' hidden lg:flex'>
                        <img className='w-[70%]
                    hover:-rotate-12
                    translate-x-[300px]
                     hover:skew-x-3 duration-700 hover:-translate-y-3 hover:scale-110 transition' src={catLogin} alt="" />
                        <div className="chat chat-start">
                            <div
                                style={
                                    {
                                        fontStyle: 'italic'
                                    }
                                }
                                className="chat-bubble chat-bubble-primary text-xl">Hi, I am Caty. <br /> You are welcome to log in page</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex-1 lg:hover:-translate-x-[340px] lg:hover:scale-100 lg:z-50 transition duration-700 lg:scale-75'>
                <div
                    data-aos="fade-up-left"
                    data-aos-easing="linear"
                    data-aos-duration="700"
                    className="hero min-h-screen">
                    {
                        loading ? <Loading></Loading> :

                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left">

                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <h1 className="text-4xl mt-10 text-center   font-semibold">Login</h1>

                                    <form onSubmit={handleSubmit} className="card-body lg:w-96">
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
                                            <p>{err}</p>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                    <div>
                                        <div className="divider">OR</div>
                                    </div>
                                    <button onClick={handleGoogleLogin} className='mb-5 lg:mx-auto btn bg-secondary w-3/4 text-white ml-8'>Sign in with Google</button>
                                </div>
                            </div>
                    }
                </div>
            </section>
        </div>
    );
};

export default Login;
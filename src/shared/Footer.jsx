import React from 'react';
import { Link } from 'react-router-dom';
import logoo from '.././assets/vector/s shape.png';
import './NavBar.css';

const Footer = () => {
    return (
        <footer
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="100"
            className="footer rounded-tr-[200px] grid-rows-2 p-10 pl-[250px] bg-black  text-neutral-content">
            <div className='flex items-center justify-center'>
                <div className='flex img'>
                    <img className='w-16 -rotate-90 translate-x-4' src={logoo} alt="" />
                </div>
                <Link to='/' class="hover:scale-105 py-1 nav-title-text hover:skew-x-6 transition normal-case  text-[40px] font-extrabold">PetShop</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Social</span>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Github</a>
            </div>
            <div>
                <span className="footer-title">Explore</span>
                <a className="link link-hover">Features</a>
                <a className="link link-hover">Enterprise</a>
                <a className="link link-hover">Security</a>
                <a className="link link-hover">Pricing</a>
            </div>
            <div>
                <span className="footer-title">Apps</span>
                <a className="link link-hover">Mac</a>
                <a className="link link-hover">Windows</a>
                <a className="link link-hover">iPhone</a>
                <a className="link link-hover">Android</a>
            </div>
        </footer>
    );
};

export default Footer;
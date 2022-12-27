import React from 'react';

const Footer = () => {
    return (
        <footer className="footer grid-rows-2 p-10 pl-[250px] bg-black  text-neutral-content">
            <div>
                <h1 className='text-4xl'>PetShop</h1>
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
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className='fw-bold'>Hi, I am Saurabh Tajane</h1>
                            <p>In the realm of software, I value simplicity, elegance, and uncompromised performance.</p>
                            <div className="icon-links">
                                <Link to="https://www.instagram.com/saurabh7nt/" target="_blank" rel="noopener noreferrer">
                                    <AiFillInstagram size={40} />
                                </Link>
                                <Link to="https://github.com/saurabh7nt/" target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub size={40} />
                                </Link>
                                <Link to="https://www.linkedin.com/in/saurabh-tajane-8686801b8/" target="_blank" rel="noopener noreferrer">
                                    <AiFillLinkedin size={40} />
                                </Link>
                                <Link to="https://twitter.com/saurabh7nt/" target="_blank" rel="noopener noreferrer">
                                    <AiFillTwitterCircle size={40} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <img src="/Images/home.svg" alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

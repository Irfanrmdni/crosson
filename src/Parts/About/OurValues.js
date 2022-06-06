import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container';

function OurValues() {
    return (
        <Container title="our values" className="bg-gray-200 pt-28">
            <div className="w-full flex flex-row items-start justify-between gap-x-16">
                <div className="w-5/12 relative">
                    <h1 className="heading-3 relative z-10">Crosson has adopted Quality Production as its basic principle.</h1>
                    <hr className="w-[44%] absolute right-[15px] -mt-[14px] border-b-8 border-yellow" />
                    <p className="heading-5 opacity-70 my-10">To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.</p>
                    <Link to="/about" className="text-base font-semibold tracking-wide underline hover:opacity-70 transition ease-in">Quality Certificates</Link>
                </div>

                <div className="w-7/12 flex flex-row items-center justify-between gap-x-4">
                    <div className="flex flex-col">
                        <img src="./images/about/planing-productions.jpg" alt="planing-productions" className="w-80 h-60 inline-block" />

                        <div className="mt-4">
                            <h5 className="text-2xl">Our Mission</h5>
                            <p className="text-base tracking-wide opacity-70 mt-1 mb-5">Center we have developped many patents in filling and packaging technology.</p>
                            <Link to="/about" className="capitalize text-base tracking-wide hover:underline">
                                read more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src="./images/about/installation.jpg" alt="installation" className="w-80 h-60 inline-block" />

                        <div className="mt-4">
                            <h5 className="text-2xl">Our Vision</h5>
                            <p className="text-base tracking-wide opacity-70 mt-1 mb-5">Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. </p>
                            <Link to="/about" className="capitalize text-base tracking-wide hover:underline">
                                read more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OurValues;
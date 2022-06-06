import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';

function Footer() {
    return (
        <>
            <Container className="bg-footer w-full py-14 min-h-max border-b-2 border-gray-400">
                <div className="w-full flex flex-row items-start justify-between">
                    <div className="w-5/12 relative">
                        <h1 className="text-3xl pr-20 relative z-10">Have a any questions? Contact Us</h1>
                        <hr className="w-[42%] absolute right-[172px] -mt-[50px] border-b-8 border-yellow" />
                    </div>

                    <div className="w-7/12 flex flex-row items-start justify-between gap-x-4">
                        <div className="flex flex-row items-start w-4/12">
                            <img src="/images/phone-icon.svg" alt="phone-icon" className="w-7 h-7" />
                            <div className="ml-3">
                                <p className="text-xs">Phone Number</p>
                                <p className="mt-1 text-base">+0(850) 544 7514</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start w-4/12">
                            <img src="/images/email-icon.svg" alt="email-icon" className="w-8 h-8" />
                            <div className="ml-3">
                                <p className="text-xs">E-Mail Address</p>
                                <p className="mt-1 text-base">hello@crosson.com</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-start w-4/12">
                            <img src="/images/maps-icon.svg" alt="maps-icon" className="w-8 h-8" />
                            <div className="ml-3">
                                <p className="text-xs">Headquarters</p>
                                <p className="mt-1 text-base">One Apple Park Way; Cupertino CA 95014, U.S.A.</p>
                                <Link to="/" className="underline text-xs">Get Direction</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row items-start justify-between mt-16">
                    <div className="w-auto ">
                        <h1 className="text-2xl">Products</h1>
                        <ul className="mt-4">
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Filling Machines</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Bottle Filling Series</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Package Machines</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Linear Machines</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Rotary Machines</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto ">
                        <h1 className="text-2xl">Solutions</h1>
                        <ul className="mt-4">
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">End  of Line Solutions</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Food Industry Machines Software</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Research Solutions</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Conveyor Solutions</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Special Solutions Your Needs</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-auto ">
                        <h1 className="text-2xl">Corporate</h1>
                        <ul className="mt-4">
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">About Us</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Our Values</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Human Resorces</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">News</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-base my-1 inline-block">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-4/12 ">
                        <div className="flex flex-row items-start">
                            <img src="/images/opportunities.png" alt="opportunities" />
                            <div className="ml-6">
                                <h5 className="text-2xl">Career Opportunities</h5>
                                <p className="text-base mt-2 mb-6 tracking-wide">Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah <span className="underline">sesame snaps.</span></p>
                                <Link to="/" className="bg-yellow hover:bg-opacity-70 transition ease-in text-base tracking-wide capitalize rounded w-52 h-11 flex items-center justify-center whitespace-nowrap">
                                    Opening Positions
                                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

            <div className="w-full bg-gray-200 mx-auto px-28 py-2 flex flex-row items-center justify-between">
                <span className="inline-block text-sm leading-9">Copyright by irpan ramdani  |  All rights reserverd</span>
                <span className="inline-block text-sm leading-9">Our Privacy and Personal Data Protection Policy  |   Terms and Conditions of Use</span>
            </div>
        </>
    )
}

export default Footer;
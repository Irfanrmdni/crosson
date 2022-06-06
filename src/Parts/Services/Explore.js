import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container';

function Explore() {
    return (
        <Container title="explore services" className="bg-gray-200 pt-28">
            <div className="relative w-8/12">
                <h1 className="heading-3 relative z-10">We offer high quality machine manufacturing and software services</h1>
                <hr className="w-[31%] absolute right-[515px] -mt-[15px] border-b-8 border-yellow" />
                <p className="heading-5 mt-5 opacity-70">To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.</p>
            </div>

            <div className="w-full flex flex-row items-center justify-between gap-x-8 mt-10">
                <div className="w-3/12">
                    <img src="./images/services/icon-1.png" alt="services" />

                    <div className="mt-5">
                        <h5 className="text-xl">Company Work Managment Software</h5>
                        <p className="text-lg opacity-70 tracking-wide my-5 leading-snug">Center we have developped many patents in filling and packaging technology.</p>
                        <Link to="/services" className="text-lg tracking-wide capitalize hover:underline">
                            read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="w-3/12">
                    <img src="./images/services/icon-2.png" alt="services" />

                    <div className="mt-5">
                        <h5 className="text-xl">Crosson Simple Storage Service (S3)</h5>
                        <p className="text-lg opacity-70 tracking-wide my-5 leading-snug">Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears. </p>
                        <Link to="/services" className="text-lg tracking-wide capitalize hover:underline">
                            read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="w-3/12">
                    <img src="./images/services/icon-3.png" alt="services" />

                    <div className="mt-5">
                        <h5 className="text-xl">Machine Access Salary Control Sowftare</h5>
                        <p className="text-lg opacity-70 tracking-wide my-5 leading-snug">Center we have developped many patents in filling and packaging technology.</p>
                        <Link to="/services" className="text-lg tracking-wide capitalize hover:underline">
                            read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="w-3/12">
                    <img src="./images/services/icon-4.png" alt="services" />

                    <div className="mt-5">
                        <h5 className="text-xl">Scalable Storage in th Cloud Service</h5>
                        <p className="text-lg opacity-70 tracking-wide my-5 leading-snug">Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears.</p>
                        <Link to="/services" className="text-lg tracking-wide capitalize hover:underline">
                            read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Explore;
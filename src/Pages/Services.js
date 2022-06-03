import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Footer from '../Parts/Footer';
import Explore from '../Parts/Services/Explore';
import Partners from '../Parts/Services/Partners';

function Services() {
    const BreadCrumbList = [
        {
            id: 1,
            url: '/',
            name: 'Home'
        },
        {
            id: 2,
            url: '/services',
            name: 'Services'
        }
    ]

    return (
        <>
            <Header />

            <Container className="bg-pages pt-20 bg-gray-200">
                <BreadCrumb items={BreadCrumbList} title="services" />

                <div className="w-full relative">
                    <h2 className="text-2xl relative z-10">Since our machines are produced in compliance with the difficult conditions that can be operated 24/7, the possibility of malfunction are very low.</h2>
                    <hr className="w-[36%] absolute right-[680px] -mt-[14px] border-b-8 border-yellow" />

                    <p className="my-6 text-base tracking-wide opacity-70 leading-relaxed">
                        Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.
                    </p>

                    <div className="w-full flex flex-col">
                        <span className="inline-block my-1 text-base opacity-70 tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.
                        </span>
                        <span className="inline-block my-1 text-base opacity-70 tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet.
                        </span>
                        <span className="inline-block my-1 text-base opacity-70 tracking-wide">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            Donut pastry apple pie ice cream dragée cheesecake.
                        </span>
                    </div>
                </div>
            </Container>

            <Explore />
            <Partners />
            <Footer />
        </>
    )
}

export default Services;
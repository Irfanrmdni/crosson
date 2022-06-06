import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import CarouselIndicators from '../Components/Carousel/CarouselIndicators';
import Container from '../Components/Container';
import Header from '../Components/Header';
import ScrollToTop from '../Components/ScrollToTop';
import Footer from '../Parts/Footer';
import NotFound from './NotFound';

function Skeleton() {
    const image = <div className="bg-gray-400 w-full h-96 animate-pulse duration-150"></div>
    const text = <div className="">
        <div className="bg-gray-300 w-full h-4 mb-6 animate-pulse duration-150"></div>
        <div className="bg-gray-300 my-3 w-8/12 h-3 animate-pulse duration-150"></div>
        <div className="bg-gray-300 my-3 w-8/12 h-3 animate-pulse duration-150"></div>
        <div className="bg-gray-300 my-3 w-8/12 h-3 animate-pulse duration-150"></div>

        <div className="mt-6">
            <div className="bg-gray-300 my-3 w-7/12 h-2 animate-pulse duration-150"></div>
            <div className="bg-gray-300 my-3 w-7/12 h-2 animate-pulse duration-150"></div>
            <div className="bg-gray-300 my-3 w-7/12 h-2 animate-pulse duration-150"></div>
        </div>
    </div>
    const items = [image, text];

    return items;
}

function ProductsDetail() {
    ScrollToTop();
    const BreadCrumbList = [
        {
            id: 1,
            name: "Home",
            url: "/"
        },
        {
            id: 2,
            name: "Products",
            url: "/products"
        },
        {
            id: 3,
            name: "Products Detail",
            url: "/products-detail"
        },
    ]
    const [data, setData] = useState({});
    const slides = data.imageUrl;
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef();
    const [active, setActive] = useState(0);

    const startSlideTimer = useCallback(() => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
        }, 2500);
    }, [slides?.length]);

    const stopSlideTimer = useCallback(() => {
        clearInterval(slideInterval.current)
    }, []);

    const switchIndex = (index) => {
        startSlideTimer();
        setCurrentSlide(index);
    }

    const getApi = useCallback(async () => {
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/products/products-detail/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const respData = await response.json();

        setLoading(true);
        setData(respData.data);
    }, [id]);

    useEffect(() => {
        document.title = "Crosson | Products Detail";
        getApi();
        startSlideTimer();

        return () => stopSlideTimer();
    }, [startSlideTimer, stopSlideTimer, getApi]);


    if (id > 4) {
        return <NotFound />
    }

    return (
        <>
            <Header />

            <Container className="bg-gray-200 bg-pages pt-20">
                <BreadCrumb items={BreadCrumbList} title="products detail" />

                <div className="w-full relative">
                    <h2 className="text-2xl relative z-10">Since our machines are produced in compliance with the difficult conditions that can be operated 24/7, the possibility of malfunction are very low.</h2>
                    <hr className="w-[40%] absolute left-0 -mt-[13px] border-b-8 border-yellow" />

                    <p className="mt-6 text-base tracking-wide opacity-70 leading-relaxed">
                        Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.
                    </p>
                </div>
            </Container>

            <div className="w-full px-28 py-28 bg-gray-200 flex flex-row items-start justify-between gap-20">
                <div className="w-7/12">
                    <div className="w-full h-full relative">
                        {/* {loading === false ? (Skeleton()[0]) : (<img src={data?.imageUrl?.[0]} alt={data.name} className="w-full inline-block" />)} */}
                        <div className="carousel w-full h-full relative overflow-hidden ">
                            <div className="carousel-inner w-full h-full relative whitespace-nowrap">
                                {slides?.map((slide, index) => {
                                    return <div
                                        className="carousel-item h-full w-full relative inline-block transition duration-1000"
                                        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
                                        key={index}
                                    >
                                        <img src={slide} alt="carousel" className="w-full inline-block" />
                                    </div>
                                })}
                            </div>
                            <CarouselIndicators slides={slides} currentSlide={currentSlide} switchIndex={switchIndex} className="w-2/12 left-8 right-0" />
                        </div>

                        <div className="w-full mt-6 flex flex-row items-center justify-between">
                            <ul className="flex flex-row items-center justify-between gap-x-2">
                                <li>
                                    <button onClick={() => setActive(0)} className={`${active === 0 ? "bg-yellow text-black font-medium" : "text-gray-600"} font-normal py-2 px-2 text-sm transition ease-in`}>Product Overview</button>
                                </li>
                                <li>
                                    <button onClick={() => setActive(1)} className={`${active === 1 ? "bg-yellow text-black font-medium" : "text-gray-600"} font-normal py-2 px-2 text-sm transition ease-in`}>Technical Data</button>
                                </li>
                                <li>
                                    <button onClick={() => setActive(2)} className={`${active === 2 ? "bg-yellow text-black font-medium" : "text-gray-600"} font-normal py-2 px-2 text-sm transition ease-in`}>Applications</button>
                                </li>
                                <li>
                                    <button onClick={() => setActive(3)} className={`${active === 3 ? "bg-yellow text-black font-medium" : "text-gray-600"} font-normal py-2 px-2 text-sm transition ease-in`}>Gallery</button>
                                </li>
                            </ul>

                            <div className="">
                                <Link to="/" className="text-sm font-medium">Download PDF</Link>
                                <img src="/images/products/pdf.png" alt="pdf" className="w-7 h-7 ml-2 inline-block" />
                            </div>
                        </div>

                        <div className="mt-6">
                            {loading === false ? (Skeleton()[1]) : (<>
                                <div className={`${active === 0 ? "block" : "hidden"}`}>
                                    <h2 className="text-lg">{data.name}</h2>
                                    <p className="my-4 text-base tracking-wide opacity-70">
                                        {data.overview}
                                    </p>
                                    <ul className="flex flex-col">
                                        {data?.utility?.map((item) => {
                                            return <li className="my-1" key={item.length}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-base tracking-wide">{item}</span>
                                            </li>
                                        })}
                                    </ul>
                                </div>

                                <div className={`${active === 1 ? "block" : "hidden"}`}>
                                    <h2 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                    <p className="my-4 text-base tracking-wide opacity-70">
                                        {data.technicalData}
                                    </p>
                                </div>

                                <div className={`${active === 2 ? "block" : "hidden"}`}>
                                    <h2 className="text-lg">Lorem ipsum dolor sit amet consectetur.</h2>
                                    <p className="my-4 text-base tracking-wide opacity-70">
                                        {data.application}
                                    </p>
                                </div>

                                <div className={`${active === 3 ? "flex" : "hidden"} w-full flex-wrap items-center justify-between`}>
                                    <h2 className="text-lg">Lorem ipsum dolor sit amet.</h2>
                                    <div className="mt-4">
                                        {data?.gallery.map((image, index) => {
                                            return <img src={image} alt="gallery" key={index} className="w-[300px] h-[200px] inline-block p-2" />
                                        })}
                                    </div>
                                </div>
                            </>)}
                        </div>

                    </div>
                </div>

                <div className="w-5/12">
                    <div className="mb-10">
                        <h5 className="text-2xl">Are you interested? Contact our sales department now</h5>

                        <div className="flex flex-row items-center my-4">
                            <img src="/images/phone-icon.svg" alt="phone-icon" />
                            <div className="ml-4">
                                <p className="text-base"><strong>Erkan giris</strong> / Sales Manager</p>
                                <p className="text-lg">+0(850) 544 7514</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center my-4">
                            <img src="/images/email-icon.svg" alt="email-icon" />
                            <div className="ml-4">
                                <p className="text-xs">Sales Department</p>
                                <p className="text-lg">sales@crosson.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-between px-5 py-4 items-center bg-white border-2 border-b-4 border-b-yellow">
                        <div className="w-7/12">
                            <h5 className="text-xl mb-2">Let's Plan an Online Meeting</h5>
                            <p className="text-sm opacity-60 inline">We are Available Now</p>
                            <span className="inline-block ml-2 rounded-full w-2 h-2 bg-cyan-500"></span>
                        </div>

                        <img src="/images/homepage/calendar.png" alt="calendar" className="w-auto" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductsDetail;
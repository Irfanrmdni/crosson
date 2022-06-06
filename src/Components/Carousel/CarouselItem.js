import React from 'react';
import Button from '../Button';

function CarouselItem({ slide, stopSlide, startSlide }) {

    return (
        <div className="h-full w-full relative inline-block carousel-item" onMouseEnter={stopSlide} onMouseOut={startSlide}>
            <div className="w-full h-full">
                <img src={slide.imageUrl} alt="banner" className="w-full inline-block" />
            </div>

            <div className="w-full absolute top-1/4 mt-5 px-28 whitespace-normal flex items-center">
                <div className="w-7/12">
                    <div className="relative">
                        <h1 className="heading-2 relative z-10">{slide.title}</h1>
                        <hr className="w-[45%] absolute right-[70px] -mt-5 border-b-8 border-yellow" />
                        <p className="heading-5 tracking-wide mt-3">{slide.description}</p>
                    </div>

                    <div className="mt-11 flex flex-row items-center">
                        <Button href="/products">our products</Button>
                        <div className="flex flex-row items-center ml-4">
                            <img src="./images/phone-icon.svg" alt="phone" className="w-7 h-7" />
                            <div className="ml-3">
                                <p className="text-sm opacity-70 font-normal">Sales Department</p>
                                <p className="text-xl font-normal">+0(639) 987 0012</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem;
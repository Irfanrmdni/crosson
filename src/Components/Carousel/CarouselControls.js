import React from 'react';

function CarouselControls({ prev, next }) {
    return (
        <div className="w-[95%] mx-auto absolute top-1/2 left-0 right-0 z-20 flex justify-between items-center">
            <button className="carousel-control left bg-yellow p-1" onClick={prev}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button className="carousel-control right bg-yellow p-1" onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

export default CarouselControls;
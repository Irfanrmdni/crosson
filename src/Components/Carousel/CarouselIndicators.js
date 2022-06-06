import React from 'react';

function CarouselIndicators({ slides, currentSlide, switchIndex, className }) {
    const addClassName = className ? className : "";

    return (
        <div className={`absolute bottom-4 mx-auto ${addClassName}`}>
            {slides?.map((_, index) => {
                return <button
                    className={`w-3 h-3 bg-white shadow-lg rounded-full mx-1 ${currentSlide === index ? " active" : ""}`}
                    key={index}
                    onClick={() => switchIndex(index)}
                ></button>
            })}
        </div>
    )
}

export default CarouselIndicators;
import React, { useCallback, useEffect, useRef, useState } from 'react';
import CarouselControls from './CarouselControls';
import CarouselIndicators from './CarouselIndicators';
import CarouselItem from './CarouselItem';

function Carousel({ slides, interval = 2500, controls = false, indicators = false, autoplay = true }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideInterval = useRef();

    const prev = () => {
        startSlideTimer();
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        setCurrentSlide(index);
    }

    const next = () => {
        startSlideTimer();
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    const switchIndex = (index) => {
        startSlideTimer();
        setCurrentSlide(index);
    }

    const stopSlideTimer = useCallback(() => {
        if (autoplay && slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    }, [autoplay]);

    const startSlideTimer = useCallback(() => {
        if (autoplay) {
            stopSlideTimer();
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0);
            }, interval);
        }
    }, [interval, slides.length, autoplay, stopSlideTimer])

    useEffect(() => {
        startSlideTimer();

        return () => stopSlideTimer();
    }, [startSlideTimer, stopSlideTimer]);

    return (
        <div className="w-full h-full relative overflow-hidden carousel">
            <div
                className="w-full h-full relative whitespace-nowrap carousel-inner transition duration-1000"
                style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
                {slides.map((slide, index) => {
                    return <CarouselItem slide={slide} key={index} stopSlide={stopSlideTimer} startSlide={startSlideTimer} />
                })}
            </div>
            {indicators && <CarouselIndicators slides={slides} currentSlide={currentSlide} switchIndex={switchIndex} className="w-1/12 left-0 right-0" />}
            {controls && <CarouselControls prev={prev} next={next} />}
        </div>
    )
}

export default Carousel;
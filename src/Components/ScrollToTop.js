import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollToTop() {
    const navigate = useNavigate();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [navigate]);

    return (
        <div>ScrollToTop</div>
    )
}

export default ScrollToTop;
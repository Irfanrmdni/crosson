import React, { useEffect } from 'react';
import Button from '../Components/Button';
import Container from '../Components/Container';
import Header from '../Components/Header';
import ScrollToTop from '../Components/ScrollToTop';
import Footer from '../Parts/Footer';

function NotFound() {
    ScrollToTop();
    useEffect(() => {
        document.title = "Crosson | 404"
    }, []);

    return (
        <>
            <Header />
            <Container className="bg-gray-200 py-20 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-semibold text-red-600">404</h1>
                <p className="text-lg tracking-wide opacity-70 my-4">The request URL /badpage was not found on this server!</p>
                <Button href="/">Back To Home</Button>
            </Container>
            <Footer />
        </>
    )
}

export default NotFound;
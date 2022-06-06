import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Header from '../Components/Header';
import ScrollToTop from '../Components/ScrollToTop';
import ContactInfo from '../Parts/Contact/ContactInfo';
import Footer from '../Parts/Footer';

function Contact() {
    ScrollToTop();
    const BreadCrumbList = [
        {
            id: 1,
            url: '/',
            name: 'Home'
        },
        {
            id: 2,
            url: '/contact',
            name: 'Contact Us'
        },
    ];
    useEffect(() => {
        document.title = "Crosson | Contact";
    }, []);

    return (
        <>
            <Header />

            <Container className="bg-pages pt-20 pb-28 bg-gray-200">
                <BreadCrumb title="contact us" items={BreadCrumbList} />
                <ContactInfo />
            </Container>

            <Footer />
        </>
    )
}

export default Contact;
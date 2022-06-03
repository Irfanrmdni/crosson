import React from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Header from '../Components/Header';
import OurValues from '../Parts/About/OurValues';
import Partners from '../Parts/About/Partners';
import Footer from '../Parts/Footer';

function About() {
    const BreadCrumbList = [
        {
            id: 1,
            name: "home",
            url: "/",
        },
        {
            id: 2,
            name: "corporate",
            url: "/corporate",
        },
        {
            id: 3,
            name: "About Crosson",
            url: "/about",
        },
    ]

    return (
        <>
            <Header />

            <Container className="bg-pages pt-20 bg-gray-200">
                <BreadCrumb items={BreadCrumbList} title="about us" />

                <div className="w-full relative">
                    <h2 className="text-2xl relative z-10">At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, increasing efficiency and producing solution for food, quality, automation and software.</h2>
                    <hr className="w-[37%] absolute right-[200px] -mt-[13px] border-b-8 border-yellow" />

                    <p className="mt-6 text-base tracking-wide opacity-70 leading-relaxed">
                        Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.
                        <br /><br />
                        Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.
                    </p>
                </div>
            </Container>

            <OurValues />
            <Partners />

            <Footer />
        </>
    )
}

export default About;
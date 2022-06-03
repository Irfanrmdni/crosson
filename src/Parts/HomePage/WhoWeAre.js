import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import Container from '../../Components/Container';

function WhoWeAre() {
    return (
        <Container title="WHO WE ARE" className="my-28">
            <div className="w-full flex flex-row items-start justify-between gap-12">

                <div className="w-7/12 relative">
                    <h1 className="text-4xl leading-tight relative z-10">
                        Crosson is an international group dedicated to the food industry.
                    </h1>

                    <hr className="w-[35%] absolute right-[143px] -mt-5 border-b-8 border-yellow" />

                    <p className="heading-5 tracking-wide opacity-70 mt-5 mb-10">
                        Crosson has twenty years’ experience in food, quality, automation and software which has been established in the food sector for Research, Efficiency and Solution Production.<br /><br />It was not long to discover that supported to knowledge by scientific perspectives, would be the solution to the real needs of the sector.
                    </p>

                    <div className="flex flex-row items-center">
                        <Button href="/">About us</Button>
                        <Link to="/" className="ml-4 underline text-lg leading-9 tracking-wide">Quality Certificates</Link>
                    </div>
                </div>

                <div className="w-5/12">
                    <div className="flex flex-row items-start">
                        <img src="./images/homepage/countries.png" alt="countries" className="w-12 h-12" />
                        <div className="ml-4">
                            <h5 className="heading-4">Exported to 24 Countries</h5>
                            <p className="heading-5 mt-1 opacity-70">168 companies in 24 countries use our machines</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-start my-8">
                        <img src="./images/homepage/products.png" alt="countries" className="w-12 h-12" />
                        <div className="ml-4">
                            <h5 className="heading-4">8 Billion Products Per Day</h5>
                            <p className="heading-5 mt-1 opacity-70">8 billion products are produced daily from our machines.</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-start my-8">
                        <img src="./images/homepage/touch.png" alt="countries" className="w-12 h-12" />
                        <div className="ml-4">
                            <h5 className="heading-4">We touch 850 million people a day</h5>
                            <p className="heading-5 opacity-70 mt-1">850 million people use products made by their machines every day</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhoWeAre;
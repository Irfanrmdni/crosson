import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';

function ContactInfo() {

    return (
        <section className="w-full relative">
            <h2 className="w-8/12 text-2xl relative z-10">Interested in our Machine & Software services or need advice? Then please get in touch and we’ll be glad to help.</h2>
            <hr className="w-[19%] absolute right-[730px] -mt-[45px] border-b-8 border-yellow" />

            <div className="w-full mt-14 flex flex-row items-center justify-between gap-x-5">
                <div className="w-4/12 bg-white shadow-md py-2 px-7">
                    <div className="my-4">
                        <h5 className="text-xl">Contact Informations</h5>
                        <p className="text-base tracking-wide opacity-70 mt-1">Get in touch and let us know how we can help</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">PHONE</h5>
                        <p className="text-base tracking-wide mt-1">+0(850) 544 7514</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">MAIL</h5>
                        <p className="text-base tracking-wide mt-1">hello@crosson.com</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">ADDRESS</h5>
                        <p className="text-base tracking-wide mt-1">One Apple Park Way; Cupertino CA 95014, U.S.A.</p>
                    </div>
                    <div className="mt-7 mb-4 flex flex-row items-center">
                        <Button href="/contact">Get Direction</Button>
                        <Link to="/" className="ml-4 text-base font-semibold hover:opacity-70 transition ease-in underline tracking-wide">See on Map</Link>
                    </div>
                </div>
                <div className="w-4/12 bg-white shadow-md py-2 px-7">
                    <div className="my-4">
                        <h5 className="text-xl">Technical Support</h5>
                        <p className="text-base tracking-wide opacity-70 mt-1">You can reach our technical support team 24/7</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">SUPPORT PHONE</h5>
                        <p className="text-base tracking-wide mt-1">+0(850) 544 7514</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">SUPPORT MAIL</h5>
                        <p className="text-base tracking-wide mt-1">hello@crosson.com</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">SUPPORT REQUEST FORM</h5>
                        <p className="text-base tracking-wide mt-1">Caramels cake marshmallow cheesecake shortbread soufflé</p>
                    </div>
                    <div className="mt-7 mb-4 flex flex-row items-center">
                        <Button href="/contact">Request Form</Button>
                    </div>
                </div>
                <div className="w-4/12 bg-white shadow-md py-2 px-7">
                    <div className="my-4">
                        <h5 className="text-xl">Satisfaction Survey</h5>
                        <p className="text-base tracking-wide opacity-70 mt-1">Use the "Service Evaluation" code to make an evaluation</p>
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">WHERE IS MY CODE?</h5>
                        <p className="text-base tracking-wide mt-1">The Service Evaluation code will be provided after the service is performed by the technical team.</p>
                    </div>
                    <div className="my-4">
                        -
                    </div>
                    <div className="my-4">
                        <h5 className="text-sm font-semibold tracking-wide opacity-50">SUPPORT MAIL</h5>
                        <p className="text-base tracking-wide mt-1">hello@crosson.com</p>
                    </div>
                    <div className="mt-7 mb-4 flex flex-row items-center">
                        <Button href="/contact">Rate Us</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo;
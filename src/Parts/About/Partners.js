import React from 'react';
import Container from '../../Components/Container';

function Partners() {
    return (
        <Container title="partners" className="bg-gray-200 py-28">
            <div className="w-full relative flex flex-row items-start justify-between gap-x-16">
                <div className="w-5/12 relative pr-5">
                    <h1 className="heading-3 relative z-10">Ask our happy customers about our quality</h1>
                    <hr className="w-[52%] absolute right-[104px] -mt-[52px] border-b-8 border-yellow" />
                </div>

                <div className="w-7/12">
                    <p className="heading-5 opacity-70 tracking-wide">To be one of the pioneering, dynamic and leading companies that offer quality products and services with an understanding of continuous improvement in the fields in which it operates.</p>
                    <h5 className="text-base mt-3 font-medium">Erkan Giris, EG Theme</h5>
                </div>
            </div>

            <div className="w-full flex flex-wrap items-center justify-center mt-16 gap-4">
                <img src="./images/about/1.png" alt="partners" />
                <img src="./images/about/2.png" alt="partners" />
                <img src="./images/about/3.png" alt="partners" />
                <img src="./images/about/4.png" alt="partners" />
                <img src="./images/about/5.png" alt="partners" />
                <img src="./images/about/6.png" alt="partners" />
                <img src="./images/about/7.png" alt="partners" />
                <img src="./images/about/8.png" alt="partners" />
                <img src="./images/about/9.png" alt="partners" />
                <img src="./images/about/10.png" alt="partners" />
                <img src="./images/about/11.png" alt="partners" />
                <img src="./images/about/12.png" alt="partners" />
                <img src="./images/about/13.png" alt="partners" />
                <img src="./images/about/14.png" alt="partners" />
                <img src="./images/about/15.png" alt="partners" />
                <img src="./images/about/16.png" alt="partners" />
                <img src="./images/about/17.png" alt="partners" />
                <img src="./images/about/18.png" alt="partners" />
                <img src="./images/about/19.png" alt="partners" />
                <img src="./images/about/20.png" alt="partners" />
                <img src="./images/about/21.png" alt="partners" />
                <div className="bg-yellow text-center rounded-full w-[102px] h-[102px] flex items-center justify-center">
                    <p className="text-base font-medium">Become Partner</p>
                </div>
            </div>
        </Container>
    )
}

export default Partners;
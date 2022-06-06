import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Parts/Footer';
import Banner from '../Parts/HomePage/Banner';
import CompanyNews from '../Parts/HomePage/CompanyNews';
import HowWeDo from '../Parts/HomePage/HowWeDo';
import WhatWeDo from '../Parts/HomePage/WhatWeDo';
import WhoWeAre from '../Parts/HomePage/WhoWeAre';
import ScrollToTop from '../Components/ScrollToTop';

function HomePage() {
   ScrollToTop();

   useEffect(() => {
      document.title = "Crosson | Home"
   }, []);

   return (
      <>
         <Header />
         <Banner />
         <WhoWeAre />
         <WhatWeDo />
         <HowWeDo />
         <CompanyNews />
         <Footer />
      </>
   )
}

export default HomePage;
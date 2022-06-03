import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container';

function WhatWeDo() {
   const services = [
      {
         id: 1,
         title: "Filling and Packaging Machines",
         url: "./images/homepage/packaging.png"
      },
      {
         id: 2,
         title: "End  of Line Solutions",
         url: "./images/homepage/endofline.png"
      },
      {
         id: 3,
         title: "Food Industry Machines Software",
         url: "./images/homepage/software.png"
      },
      {
         id: 4,
         title: "7/24 Techincal Support",
         url: "./images/homepage/support.png"
      },
      {
         id: 5,
         title: "Special Solutions Your Needs",
         url: "./images/homepage/solutions.png"
      },
   ]

   return (

      <>
         <Container title="what we do" className="bg-whatwedo min-h-max my-28">
            <div className="flex flex-grow items-start justify-between w-full">
               <div className="w-7/12 relative">
                  <h1 className="text-4xl leading-tight relative z-10">With our flexible production capacity and high technology, we produce customized solutions for your needs.</h1>
                  <hr className="w-[50%] absolute right-[5px] -mt-[62px] border-b-8 border-yellow" />
               </div>

               <div className="w-5/12 flex flex-grow items-center justify-end">
                  <img src="./images/homepage/machines.png" alt="machines" />

                  <div className="ml-4">
                     <h5 className="text-3xl">Watch Our Machines</h5>
                     <p className="text-sm text-grey">2.34Min, 14.7MB</p>
                  </div>
               </div>
            </div>

            <div className="w-full flex flex-grow items-start justify-between mt-36">
               {services.map((service) => {
                  return <div className="w-[15%] border border-gray-50 text-center" key={service.id}>
                     <img src={service.url} alt={service.title} className="w-14 h-14 inline-block" />
                     <p className="mt-4 text-lg">{service.title}</p>
                  </div>
               })}
            </div>
         </Container>

         <Container title="">
            <div className="flex flex-row justify-between mt-16">
               <div className="flex flex-col w-8/12 mr-20">
                  <div className="">
                     <h1 className="text-3xl mb-4">Filling and Packaging Machines</h1>
                     <p className="text-lg tracking-wide opacity-70 inline">Liquorice lemon drops powder chocolate liquorice candy dessert gummi bears. Caramels marzipan donut jujubes sweet roll. Powder croissant toffee shortbread chocolate sweet pie.</p>
                     <Link to="/" className="ml-1 text-lg tracking-wide text-blue font-semibold">Read more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                     </Link>
                  </div>

                  <div className="mt-14 flex flex-row justify-between items-center gap-x-7">
                     <div className="text-center">
                        <img src="./images/homepage/linear-machines.jpg" alt="linear-machines" className="linear-machines" />
                        <h5 className="text-lg mt-2">Linear Machines</h5>
                     </div>
                     <div className="text-center">
                        <img src="./images/homepage/rotary-machines.jpg" alt="Rotary Machines" className="rotary-machines" />
                        <h5 className="text-lg mt-2">Rotary Machines</h5>
                     </div>
                     <div className="text-center">
                        <img src="./images/homepage/rotary-machines.jpg" alt="bottle-machines" className="rotary-machines" />
                        <h5 className="text-lg mt-2">Bottle Filling Machines</h5>
                     </div>
                  </div>
               </div>

               <div className="w-4/12 ml-20">
                  <div className="w-full flex flex-row justify-between px-5 py-4 items-center border-2 border-b-4 border-b-yellow">
                     <div className="w-7/12">
                        <h5 className="text-xl mb-2">Let's Plan an Online Meeting</h5>
                        <p className="text-sm opacity-60 inline">We are Available Now</p>
                        <span className="inline-block ml-2 rounded-full w-2 h-2 bg-cyan-500"></span>
                     </div>

                     <img src="./images/homepage/calendar.png" alt="calendar" className="w-auto" />
                  </div>

                  <div className="mt-10">
                     <h5 className="text-2xl">Are you interested? Contact our sales department now</h5>

                     <div className="flex flex-row items-center my-4">
                        <img src="./images/phone-icon.svg" alt="phone-icon" />
                        <div className="ml-4">
                           <p className="text-base"><strong>Erkan giris</strong> / Sales Manager</p>
                           <p className="text-lg">+0(850) 544 7514</p>
                        </div>
                     </div>
                     <div className="flex flex-row items-center my-4">
                        <img src="./images/email-icon.svg" alt="email-icon" />
                        <div className="ml-4">
                           <p className="text-xs">Sales Department</p>
                           <p className="text-lg">sales@crosson.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Container>

      </>
   )
}

export default WhatWeDo;
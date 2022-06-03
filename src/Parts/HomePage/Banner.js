import React from 'react';
import Button from '../../Components/Button';

function Banner() {
   return (
      <>
         <div className="h-screen bg-image px-28 flex items-center">
            <div className="w-7/12">
               <div className="relative">
                  <h1 className="heading-2 relative z-10">We make Filling & Packaging Machines for Food Industry</h1>
                  <hr className="w-[45%] absolute right-[70px] -mt-5 border-b-8 border-yellow" />
                  <p className="heading-5 tracking-wide mt-3">With our flexible production capacity and high technology, we produce customized solutions for your needs.</p>
               </div>

               <div className="mt-11 flex flex-row items-center">
                  <Button href="/">our products</Button>
                  <div className="flex flex-row items-center ml-4">
                     <img src="./images/phone-icon.svg" alt="phone" className="w-7 h-7" />
                     <div className="ml-3">
                        <p className="text-sm opacity-70 font-normal">Sales Department</p>
                        <p className="text-xl font-normal">+0(639) 987 0012</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner;
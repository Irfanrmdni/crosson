import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const navItem = [
      {
         id: 1,
         url: '/',
         title: 'Solutions'
      },
      {
         id: 2,
         url: '/',
         title: 'Softwares'
      },
      {
         id: 3,
         url: '/services',
         title: 'Services'
      },
      {
         id: 4,
         url: '/',
         title: 'Corporate'
      },
      {
         id: 5,
         url: '/news',
         title: 'News'
      },
      {
         id: 6,
         url: '/contact',
         title: 'Contact'
      },
   ]

   const dropDownList = [
      {
         id: 1,
         title: "Products 1",
         url: "/products"
      },
      {
         id: 2,
         title: "Products 2",
         url: "/products"
      },
      {
         id: 13,
         title: "Products 3",
         url: "/products"
      },
   ]

   const [dropdown, setDropdown] = useState(false);

   return (
      <section className="w-full shadow-lg">
         <div className="container mx-5 py-3">
            <div className="w-full flex justify-between items-center">
               <div className="flex flex-row items-center">
                  <img src="/images/phone-icon.svg" alt="phone" className="w-7 h-7" />
                  <div className="ml-3">
                     <p className="text-xs font-normal">Do you need help?</p>
                     <p className="text-base font-normal">+0(850) 544 7514</p>
                  </div>
               </div>

               <Link to="/" className="capitalize text-4xl font-bold">crosson</Link>

               <div className="flex flex-row items-center">
                  <div className="flex flex-row items-center">
                     <Link to="/contact">
                        <img src="/images/linkedin-icon.svg" alt="linkedin" className="w-5 h-5 hover:scale-125 transition-transform ease-in" />
                     </Link>
                     <Link to="/contact">
                        <img src="/images/instagram-icon.svg" alt="instagram" className="w-5 h-5 mx-7 hover:scale-125 transition-transform ease-in" />
                     </Link>
                     <Link to="/contact">
                        <img src="/images/twitter-icon.svg" alt="twitter" className="w-5 h-5 hover:scale-125 transition-transform ease-in" />
                     </Link>
                  </div>

                  <div className="flex flex-row items-center ml-11">
                     <img src="/images/english-icon.svg" alt="language" className="w-8 h-8" />
                     <div className="ml-3">
                        <p className="text-xs opacity-50 font-normal">Language</p>
                        <p className="text-sm font-normal">English</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-7/12 mt-5 mx-auto">
               <ul className="flex flex-row items-center justify-between">
                  <li className="flex items-center">
                     <button to="/" onClick={() => setDropdown(!dropdown)} className="text-lg hover:underline">Products</button>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                     </svg>

                     {dropdown && (
                        <ul className="absolute top-28 bg-gray-100 shadow-lg rounded-md px-4 z-20">
                           {dropDownList.map((item) => {
                              return <li key={item.id} className="my-4">
                                 <Link to={item.url} className="text-base hover:underline">{item.title}</Link>
                              </li>
                           })}
                        </ul>
                     )}
                  </li>

                  {navItem.map((item) => {
                     return <li key={item.id}>
                        <Link to={item.url} className="text-lg hover:underline">{item.title}</Link>
                     </li>
                  })}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Header;
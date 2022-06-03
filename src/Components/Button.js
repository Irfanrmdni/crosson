import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, href }) {
   return (
      <>
         <Link to={href} className="bg-yellow heading-5 tracking-wide capitalize rounded w-48 h-11 flex items-center justify-center whitespace-nowrap">
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-5 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
         </Link>
      </>
   )
}

export default Button;
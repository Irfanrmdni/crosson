import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumb({ items, title }) {
    return (
        <>
            <section className="w-8/12">
                <h2 className="capitalize text-4xl">{title}</h2>

                <ul className="mt-3 mb-11 flex flex-row items-center justify-start">
                    {items?.map?.((item, index) => {
                        const arias = index === item.length ? { "aria-label": "current-page" } : {};

                        return <li className="mr-4" key={item.id}>
                            <Link to={item.url} {...arias} className="text-sm capitalize">
                                {item.name}
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-3" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default BreadCrumb;
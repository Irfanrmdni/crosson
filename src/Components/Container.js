import React from 'react';

function Container({ children, title, className }) {
    const addClassName = className ? className : "";

    return (
        <>
            <div className={`w-full mx-auto px-28 ${addClassName}`}>
                {
                    title ? <h2 className="text-xl leading-8 font-bold opacity-40 uppercase">{title}</h2> : ""
                }
                {children}
            </div>
        </>
    )
}

export default Container;
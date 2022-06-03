import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Components/Container';

function Skeleton() {
    return Array(3).fill().map((_, index) => {
        return <div className="w-4/12 flex flex-col justify-start" key={index}>
            <div className="bg-gray-400 w-[359] h-[239px] animate-pulse duration-150"></div>
            <div className="mt-6 animate-pulse duration-150">
                <div className="bg-gray-300 w-4/12 h-3 my-3"></div>
                <div className="bg-gray-300 w-8/12 h-3 my-3"></div>
                <div className="bg-gray-300 w-3/12 h-3 my-3"></div>
            </div>
        </div>
    })
}

function HowWeDo() {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getApi() {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/homepage/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const respData = await response.json();
            setDatas(respData.data);
            setLoading(true);
        }

        getApi();
    }, []);

    return (
        <>
            <Container title="how we do" className="my-28">
                <div className="relative w-8/12">
                    <h1 className="heading-3 relative z-10">A journey from design to product.</h1>
                    <hr className="w-[32%] absolute right-[305px] -mt-[15px] border-b-8 border-yellow" />
                    <p className="heading-5 mt-2">Starting from the planning of the product our customer wants; design, manufacturing, software, mounting, installation & comissioning are made by us.</p>
                </div>

                <div className="mt-12 flex flex-row items-center gap-x-6 justify-between">
                    {loading === false ? (<Skeleton />) : (datas?.map((data) => {
                        return <div className="w-4/12 flex flex-col justify-start" key={data.id}>
                            <img src={data.imageUrl} alt={data.title} />
                            <div className="mt-6">
                                <h5 className="heading-4">{data.title}</h5>
                                <p className="text-base tracking-wide opacity-70 mt-1 mb-7">{data.description}</p>
                                <Link to={data.url} className="text-lg tracking-wide">
                                    Read More

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    }))}
                </div>
            </Container>
        </>
    )
}

export default HowWeDo;
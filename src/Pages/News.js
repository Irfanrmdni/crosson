import React, { useEffect, useState } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import Button from '../Components/Button';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Footer from '../Parts/Footer';

function Skeleton() {
    return Array(6).fill().map((_, index) => {
        return <div className="w-6/12 flex flex-row items-center my-5 pr-8" key={index}>
            <div className="w-[275px] h-[300px] bg-gray-400 animate-pulse duration-150"></div>

            <div className="w-full ml-5">
                <div className="w-10/12 h-3 bg-gray-300 animate-pulse duration-150"></div>
                <div className="w-8/12 h-3 bg-gray-300 mt-4 mb-8 animate-pulse duration-150"></div>
                <div className="w-6/12 h-4 bg-gray-300 animate-pulse duration-150"></div>
            </div>
        </div>
    })
}

function News() {
    const BreadCrumbList = [
        {
            id: 1,
            name: "Home",
            url: "/"
        },
        {
            id: 2,
            name: "News",
            url: "/news"
        },
    ]
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getApi() {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/news`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const respData = await response.json();
            setLoading(true);
            setDatas(respData.data);
        }

        getApi();
    }, []);

    return (
        <>
            <Header />

            <Container className="bg-gray-200 bg-pages pt-20 pb-28">
                <BreadCrumb items={BreadCrumbList} title="news" />

                <div className="w-full flex flex-wrap items-start justify-between">
                    {loading === false ? (Skeleton()) : (datas?.map((data) => {
                        return <div className="w-6/12 flex flex-row items-center my-5 pr-8" key={data.id}>
                            <img src={data.imageUrl} alt={data.title} className="w-[275px] h-[300px]" />

                            <div className="ml-5">
                                <h5 className="text-xl">{data.title}</h5>
                                <p className="text-base mt-4 mb-8 opacity-70 tracking-wide">{data.description}</p>
                                <Button href={data.url}>read more</Button>
                            </div>
                        </div>
                    }))}
                </div>
            </Container>

            <Footer />
        </>
    )
}

export default News;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Button from '../Components/Button';
import Container from '../Components/Container';
import Header from '../Components/Header';
import ScrollToTop from '../Components/ScrollToTop';
import Footer from '../Parts/Footer';
import NotFound from './NotFound';

function Skeleton() {
    const breadcrumb = <div className="mb-11">
        <div className="bg-gray-300 w-8/12 h-4 animate-pulse duration-150"></div>
        <div className="bg-gray-300 w-6/12 h-3 mt-3 animate-pulse duration-150"></div>
    </div>;
    const text = <div className="">
        <div className="w-full h-[620px] bg-gray-400 animate-pulse duration-150"></div>
        <div className="mt-7 bg-gray-300 w-10/12 h-3 animate-pulse duration-150"></div>
        <div className="bg-gray-300 w-8/12 h-3 my-4 animate-pulse duration-150"></div>
        <div className="bg-gray-300 w-6/12 h-3 my-4 animate-pulse duration-150"></div>
    </div>;
    const related = Array(2).fill().map((_, index) => {
        return <div className="w-6/12 flex flex-row items-center" key={index}>
            <div className="w-[250px] h-[285px] bg-gray-400 animate-pulse duration-150"></div>
            <div className="ml-5 w-full">
                <div className="bg-gray-300 w-8/12 h-3 animate-pulse duration-150"></div>
                <div className="bg-gray-300 mt-4 mb-6 w-6/12 h-3 animate-pulse duration-150"></div>
                <div className="bg-gray-300 w-5/12 h-4 animate-pulse duration-150"></div>
            </div>
        </div>
    });

    const items = [breadcrumb, text, related];

    return items;
}

function NewsDetail() {
    ScrollToTop();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
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
        {
            id: 3,
            name: data?.name,
            url: `/news/news-detail/${id}`
        },
    ];

    useEffect(() => {
        document.title = "Crosson | News Detail";
        async function getApi() {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/news/news-detail/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const respData = await response.json();

            setLoading(true);
            setData(respData.data);
        }

        getApi();
    }, [id]);

    if (id > 6) {
        return <NotFound />
    } else {
        return (
            <>
                <Header />

                <Container className="bg-pages bg-gray-200 pt-20 pb-28">
                    {loading === false ? (Skeleton()[0]) : (<BreadCrumb title={data?.name} items={BreadCrumbList} />)}
                    <div className="w-full">
                        {loading === false ? (Skeleton()[1]) : (<><img src={data?.imageUrl} alt={data?.name} className="w-full h-[620px]" />
                            <div className="mt-7 relative">
                                <h5 className="text-2xl mb-3 relative z-10">{data?.title}</h5>
                                <hr className="w-[37%] absolute right-[200px] -mt-[25px] border-b-8 border-yellow" />
                                <p className="text-base opacity-70 tracking-wide">{data?.description}</p>
                            </div></>)}
                    </div>

                    <div className="mt-16">
                        <div className="w-7/12 relative">
                            <h5 className="text-2xl relative z-10">Related News</h5>
                            <hr className="w-[23%] absolute left-0 -mt-[13px] border-b-8 border-yellow" />
                            <p className="text-lg mt-2">Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet</p>
                        </div>

                        <div className="w-full mt-7 flex flex-row items-center justify-between gap-x-4">
                            {loading === false ? (Skeleton()[2]) : (data?.relatedNews?.map((item) => {
                                return <div className="w-6/12 flex flex-row items-center" key={item?.id}>
                                    <img src={item?.imageUrl} alt={item?.title} className="w-[250px] h-[285px]" />
                                    <div className="ml-5">
                                        <h5 className="text-lg">{item?.title}</h5>
                                        <p className="text-sm mt-3 mb-7 opacity-70 tracking-wide">{item?.description}</p>
                                        <Button href={item?.url}>read more</Button>
                                    </div>
                                </div>
                            }))}
                        </div>
                    </div>
                </Container>

                <Footer />
            </>
        )
    }
}

export default NewsDetail;
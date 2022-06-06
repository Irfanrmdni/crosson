import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button';
import Container from '../../Components/Container';

function Skeleton() {
    return Array(2).fill().map((_, index) => {
        return <div className="flex flex-row items-center w-6/12" key={index}>
            <div className="bg-gray-400 w-[226px] h-[339px] animate-pulse duration-150"></div>
            <div className="ml-7 animate-pulse duration-150">
                <div className="bg-gray-300 w-56 h-3"></div>
                <div className="bg-gray-300 w-52 h-3 mt-4 mb-6"></div>
                <div className="bg-gray-300 w-48 h-5"></div>
            </div>
        </div>
    });
}

function CompanyNews() {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getApi() {
            const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/homepage/company`, {
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
            <Container title="company news" className="bg-company-news my-28">
                <div className="relative w-8/12">
                    <h1 className="heading-3 relative z-10">News from Crosson</h1>
                    <hr className="w-[15%] absolute right-[483px] -mt-[15px] border-b-8 border-yellow" />
                    <p className="heading-5 mt-2">Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet</p>
                </div>

                <div className="w-full flex flex-row justify-between mt-12 items-center gap-x-10">
                    {loading === false ? (<Skeleton />) : (datas?.map((data) => {
                        return <div className="flex flex-row items-center w-6/12" key={data.id}>
                            <img src={data.imageUrl} alt="company-news-1" className="w-5/12 h-2/5 inline-block" />
                            <div className="ml-7">
                                <h5 className="text-xl">{data.title}</h5>
                                <p className="text-base tracking-wide opacity-70 mt-4 mb-6">{data.description}</p>
                                <Button href="/news">Read More</Button>
                            </div>
                        </div>
                    }))}
                </div>
            </Container>
        </>
    )
}

export default CompanyNews;
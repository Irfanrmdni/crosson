import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../Components/BreadCrumb';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Footer from '../Parts/Footer';

function Skeleton() {
   return Array(4).fill().map((_, index) => {
      return <div className="w-5/12" key={index}>
         <div className="bg-gray-300 w-full h-[325px] animate-pulse duration-150"></div>
         <div className="bg-gray-300 mt-4 w-full h-4 animate-pulse duration-150"></div>
      </div>
   })
}

function Products() {
   const BreadCrumbList = [
      {
         id: 1,
         name: "Home",
         url: "/"
      },
      {
         id: 2,
         name: "Products",
         url: "/products"
      },
   ];

   const [datas, setDatas] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      async function getApi() {
         const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/products`, {
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
   }, [])

   return (
      <>
         <Header />

         <Container className="bg-pages pt-20 pb-14 bg-gray-200">
            <BreadCrumb items={BreadCrumbList} title="products" />

            <div className="w-full relative">
               <h2 className="text-2xl relative z-10">Since our machines are produced in compliance with the difficult conditions that can be operated 24/7, the possibility of malfunction are very low.</h2>
               <hr className="w-[40%] absolute left-0 -mt-[13px] border-b-8 border-yellow" />

               <p className="mt-6 text-base tracking-wide opacity-70 leading-relaxed">
                  Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.
               </p>
            </div>
         </Container>

         <div className="w-full bg-gray-200 px-28 py-14 flex flex-wrap items-center justify-between gap-7">
            {loading === false ? (<Skeleton />) : (datas?.map((data) => {
               return <div className="bg-white shadow-md w-5/12" key={data.id}>
                  <img src={data.imageUrl[0]} alt={data.name} className="inline-block w-full" />
                  <Link to={data.url} className="p-3 text-xl inline-block">{data.name}</Link>
               </div>
            }))}
         </div>

         <Footer />
      </>
   )
}

export default Products;
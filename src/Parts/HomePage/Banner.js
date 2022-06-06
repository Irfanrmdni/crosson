import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';

function Banner() {
   const slides = [
      {
         imageUrl: "/images/homepage/banner1.jpg",
         title: "We make Filling & Packaging Machines for Food Industry",
         description: "With our flexible production capacity and high technology, we produce customized solutions for your needs."
      },
      {
         imageUrl: "/images/homepage/banner2.jpg",
         title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, minus error eaque dicta esse ducimus!"
      },
      {
         imageUrl: "/images/homepage/banner3.jpg",
         title: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
         description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non molestias iusto itaque. Commodi, eveniet."
      }
   ];

   return (
      <>
         <Carousel slides={slides} controls indicators />
      </>
   )
}

export default Banner;
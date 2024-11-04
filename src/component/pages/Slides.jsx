import React, { useRef, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

import './SliderStyle.css';
import { SliderContent } from './SliderContent';

import { PopularData } from '../Data/Data';


export const Slider = () => {
   const [slideBegOrNot, handleSlideByState] = useState({
      isFirst: true,
      isLast: false,
   });
   const SlideRef = useRef();

   const handleNext = () => {
      SlideRef.current.swiper.slideNext();
   };

   const handlePrev = () => {
      SlideRef.current.swiper.slidePrev();
   };

   const onSlideChange = (swiper) => {
      handleSlideByState({
         isFirst: swiper.isBeginning,
         isLast: swiper.isEnd,
      });
   };

   const { isLast, isFirst } = slideBegOrNot;

   return (
      <div className="container">
         <h1 className="heading">Post Carousel Using React Swiper Js</h1>

         <div className="post-box">
            <div className="bg-left"></div>
            <div className="bg-right"></div>

            <div className="post-heading">
               <div className="heading-box">
                  <h2 className="second-heading">Just For You</h2>
                  <div className="pagination-slide">
                     <p className="swiper-paginations"></p>
                     <div className="bs-icons">
                        <BsArrowLeft
                           className={`Arrow ${isFirst ? 'disabled' : ''}`}
                           onClick={handlePrev}
                        />
                        <BsArrowRight
                           className={`Arrow ${isLast ? 'disabled' : ''}`}
                           onClick={handleNext}
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className="post-conatin">
               <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  className={'mySwiper'}
                  ref={SlideRef}
                  onSlideChange={onSlideChange}
                  pagination={{
                     el: '.swiper-paginations',
                     type: 'fraction',
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation]}
                 
               >
                  { PopularData .map((item) => {
                     return (
                        <SwiperSlide key={item.id}>
                           <SliderContent
                              key={item.id}
                              img={item.img}
                              title={item.name}
                            //   description={item.description}
                            //   alt={item.name}
                           />
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
         </div>
      </div>
   );
};
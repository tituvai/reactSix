
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

   const [slideIndex, setSlideIndex] = useState(0);
   const [updateCount, setUpdateCount] = useState(1);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setSlideIndex(current),
    beforeChange:() => setUpdateCount((prev) => (prev % 3) + 1)
  };
  const totalSlides = 3;
  const progressHeight = ((slideIndex + 1) / totalSlides) * 100;

  return (
    <>
      <div className="relative">
          <h4 className="text-base text-black absolute top-1/3 left-[30px] z-10">{updateCount}</h4>
          
      <div className="absolute left-[40px] top-1/2 -translate-y-1/2 h-[150px] w-[4px] bg-white z-10 rounded-full">
        <div
          className="bg-black transition-all duration-500 w-full"
          style={{ height: `${progressHeight}%` }}
        ></div>
      </div>
       <Slider 
        ref={(slider) => (sliderRef.current = slider)}
        {...settings}
      >
        
          <div className=" bg-[url(/src/assets/bannerOne.png)] h-[500px] bg-no-repeat bg-cover bg-center"></div>
        
          <div className=" bg-[url(/src/assets/bannerTwo.png)] h-[500px] bg-no-repeat bg-cover bg-center"></div>
        
          <div className=" bg-[url(/src/assets/bannerThree.png)] h-[500px] bg-no-repeat bg-cover bg-center"></div>
        
      </Slider>
    </div>
    </>
  );
};

export default Banner;
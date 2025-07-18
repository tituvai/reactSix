import React from 'react'
import Product from '../Product'
import Container from '../Container'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import time from '/src/assets/timeBox.png'
import cat from '/src/assets/cat.png'
import juri from '/src/assets/juri.png'
import whact from '/src/assets/whact (2).png'
import Hadding from '../Hadding';
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';

const Arrival = () => {

    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>
  };
  return (
    <>
        <div className="py-15">
            <Container>
                <div className="">
                    <Hadding className={'text-[39px] text-hoverC font-bold pb-8'} text={'New Arrivals'} as={'h3'}/>
                </div>
               <div className="-mx-2">
                 <Slider {...settings }>
                    <div className='px-2'>
                        <Product productSrc={time} newProduct={'10%'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div>
                    <div className='px-2'>
                        <Product productSrc={cat} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div>
                    <div className='px-2'>
                        <Product productSrc={juri} newProduct={'50%'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div>
                    <div className='px-2'>
                        <Product productSrc={time} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div> 
                    <div className='px-2'>
                        <Product productSrc={whact} newProduct={'20%'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div> 
                </Slider>
               </div>
            </Container>
        </div>
    </>
  )
}

export default Arrival
import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Flex from '../Flex'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import time from '/src/assets/timeBox.png'
import cat from '/src/assets/cat.png'
import juri from '/src/assets/juri.png'
import whact from '/src/assets/whact (2).png'
import Hadding from '../Hadding';

const Arrival = () => {

    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  };
  return (
    <>
        <div className="py-18">
            <Container>
                <div className="">
                    <Hadding className={'text-[39px] text-hoverC font-bold pb-8'} text={'New Arrivals'} as={'h3'}/>
                </div>
                <Slider {...settings }>
                    <div>
                        <Product productSrc={time} newProduct={'10%'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div>
                    <div>
                        <Product productSrc={cat} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div>
                    <div>
                        <Product productSrc={juri} newProduct={'50%'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div>
                    <div>
                        <Product productSrc={time} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div> 
                    <div>
                        <Product productSrc={whact} newProduct={'20%'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.400'}/>
                    </div> 
                </Slider>
            </Container>
        </div>
    </>
  )
}

export default Arrival
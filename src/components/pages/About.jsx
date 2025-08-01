import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import Hadding from '../Hadding';
import Image from '../Image';
import time from '/src/assets/timeBox.png'
import topJuri from '/src/assets/topJuri.png'

const About = () => {
  return (
     <>
        <div className="px-5 lg:px-0 pb-25">
           <Container>
             <div className="py-20">
               <Hadding className={'text-[49px] text-hoverC font-bold'} text={'About'} as={'h3'}/>
                    <Flex className={'gap-x-3'}>
                        <Link to={'/'}><span className='text-sm text-footer'>Home</span></Link>
                        <FaAngleRight className='text-footer text-sm'/>
                        <Link to={'/'}><span className='text-sm text-footer'>Products</span></Link>
                    </Flex>
                </div>
                <Flex className={'justify-between'}>
                  <div className="w-[48%]">
                     <Link to={'/'}><Image className={'w-full'} imgSrc={time} imgAlt={'timeBox.png'}/></Link>
                  </div>
                  <div className="w-[48%]">
                     <Link to={'/'}><Image className={'w-full'} imgSrc={topJuri} imgAlt={'topJuri.png'}/></Link>
                  </div>
                </Flex>
                <Hadding className={'text-sm  lg:text-[25px] text-hoverC lg:leading-10 pt-12 lg:pr-12'} text={'Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.'} as={'p'}/>
                <div className="lg:flex lg:justify-between pt-20">
                  <div className=" lg:w-[32%]">
                     <Hadding className={'text-2xl text-hoverC font-bold leading-9'} text={'Our Vision'} as={'h4'}/>
                     <Hadding className={'text-sm lg:text-base text-menuC lg:leading-7.5 pt-3'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."} as={'p'}/>
                  </div>
                  <div className=" lg:w-[32%] pt-5 lg:pt-0">
                     <Hadding className={'text-2xl text-hoverC font-bold leading-9'} text={'Our Story'} as={'h4'}/>
                     <Hadding className={'text-sm lg:text-base text-menuC lg:leading-7.5 pt-3'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."} as={'p'}/>
                  </div>
                  <div className=" lg:w-[32%] pt-5 lg:pt-0">
                     <Hadding className={'text-2xl text-hoverC font-bold leading-9'} text={'Our Brands'} as={'h4'}/>
                     <Hadding className={'text-sm lg:text-base text-menuC lg:leading-7.5 pt-3'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."} as={'p'}/>
                  </div>
                </div>
           </Container>
        </div>
    </>
  )
}

export default About
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import Hadding from '../Hadding';
import Button from '../Button';

const Contact = () => {
  return (
     <>
        <div className="px-5 lg:px-0 pb-25">
         <Container>
             <div className="py-10 lg:py-20">
               <Hadding className={'text-[49px] text-hoverC font-bold'} text={'Contacts'} as={'h3'}/>
                    <Flex className={'gap-x-3'}>
                        <Link to={'/'}><span className='text-sm text-footer'>Home</span></Link>
                        <FaAngleRight className='text-footer text-sm'/>
                        <Link to={'/'}><span className='text-sm text-footer'>Contacts</span></Link>
                    </Flex>
                </div>

                 <div className="lg:w-[780px] pt-12 pb-50">
                    <Hadding className={'text-xl text-hoverC font-bold '} text={'Fill up a Form'} as={'h5'}/>
                    <label htmlFor="#" className='block text-base font-bold text-hoverC pt-8'>Name</label>
                    <input type="text" placeholder='Your name here' className='w-full outline-0 border-b-1 border-borderC placeholder:text-sm placeholder:text-menuC py-3'/>
                    <label htmlFor="#" className='block text-base font-bold text-hoverC pt-4'>Email</label>
                    <input type="text" placeholder='Your email here' className='w-full outline-0 border-b-1 border-borderC placeholder:text-sm placeholder:text-menuC py-3'/>
                    <label htmlFor="#" className='block text-base font-bold text-hoverC pt-4'>Message</label>
                    <textarea name="" id="" className='h-[138px] w-full py-3 outline-0 border-b-1 border-borderC placeholder:text-sm placeholder:text-menuC' placeholder='Your message here '></textarea>
                    <Link to={'/'}><Button className={'text-white bg-hoverC mt-5'} btnText={'Post'}/></Link>
                </div>
                <div className="">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3652.1585016980266!2d90.3799100239697!3d23.74172658911187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCreative%20IT%20Institute%2C!5e0!3m2!1sen!2sbd!4v1753288672830!5m2!1sen!2sbd" className='w-full lg:h-[527px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
         </Container> 
        </div>
    </>
  )
}

export default Contact
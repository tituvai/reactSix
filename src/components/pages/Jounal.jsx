import React from 'react'
import Container from '/src/components/Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import Hadding from '../Hadding';
import { FaCaretDown } from "react-icons/fa";
const Jounal = () => {
  return (
     <>
        <div className="pb-20">
           <Container>
                <div className="py-20">
                  <Hadding className={'text-[49px] text-hoverC font-bold'} text={'Checkout'} as={'h3'}/>
                    <Flex className={'gap-x-3'}>
                        <Link to={'/'}><span className='text-sm text-footer'>Home</span></Link>
                        <FaAngleRight className='text-footer text-sm'/>
                        <Link to={'/'}><span className='text-sm text-footer'>Checkout</span></Link>
                    </Flex>
                </div>
                <div className="">
                  <Hadding className={'text-base text-hoverC leading-7.5'} text={<><span className='text-menuC'>Have a coupon?</span><span>Click here to enter your code</span></>} as={'p'}/>
                </div>
                 <div className="w-[840px]">
                    <Hadding className={'text-[29px] text-hoverC font-bold pt-9'} text={'Billing Details'} as={'h3'}/>
                    <Flex className={'py-5 gap-x-10'}>
                        <div className="">
                        <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block'>Email address</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-[400px]' type="email" placeholder='company@domain.com' />
                        </div>
                        <div className="">
                        <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block'>Password</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-[400px]' type="password" placeholder='Enter Password' />
                        </div>
                    </Flex>
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block'>Companye Name (optional)</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='Company Name' />
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block pt-5'>Country *</label>
                           <div className="relative">
                              <select name="" id="" className='appearance-none outline-0 border-b-1 border-borderC py-4 w-full'>
                              <option value="">Dhaka</option>
                              <option value="">Dhaka</option>
                              <option value="">Dhaka</option>
                              <option value="">Dhaka</option>
                              <option value="">Dhaka</option>
                           </select>
                           <div className="">
                              <FaCaretDown className='absolute top-1/2 right-5 text-menuC'/>
                           </div>
                           </div>
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block pt-5'>Street Address *</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='House number and street name' />
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='Apartment, suite, unit etc. (optional)' />
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6  pt-5'>Town/City *</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='Town/City' />
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block pt-5'>County (optional)</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='County' />
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block pt-5'>Post Code *</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='Post Code' />
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block pt-5'>Phone *</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='Phone' />
                     <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block pt-5'>Email Address *</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full' type="email" placeholder='Email' />

                </div>
           </Container>
        </div>
    </>
  )
}

export default Jounal
import React from 'react'
import Container from '../Container'
import { FaAngleRight } from "react-icons/fa6";
import Hadding from '../Hadding';
import Flex from '../Flex';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Login = () => {
  return (
    <>
        <div className="px-4 lg:px-0 pb-20">
            <Container>
                <div className="py-10 lg:py-20">
               <Hadding className={'text-[49px] text-hoverC font-bold'} text={'Login'} as={'h3'}/>
                    <Flex className={'gap-x-3'}>
                        <Link to={'/'}><span className='text-sm text-footer'>Home</span></Link>
                        <FaAngleRight className='text-footer text-sm'/>
                        <Link to={'/'}><span className='text-sm text-footer'>Login</span></Link>
                    </Flex>
                </div>
                <div className="border-b-1 border-borderC py-5">
                    <Hadding className={'lg:w-[644px] text-base text-menuC'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} as={'p'}/>
                </div>
                <div className="">
                    <Hadding className={'text-[29px] text-hoverC font-bold pt-9'} text={'Returning Customer'} as={'h3'}/>
                    <Flex className={'py-5 gap-x-10 flex-col md:flex-row'}>
                        <div className="w-full">
                        <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block'>Email address</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full lg:w-[400px]' type="email" placeholder='company@domain.com' />
                        </div>
                        <div className="w-full">
                        <label htmlFor="#" className='text-base text-hoverC font-bold leading-6 block'>Password</label>
                        <input className='placeholder:text-sm placeholder:text-menuC outline-0 border-b-1 border-borderC py-4 w-full lg:w-[400px]' type="password" placeholder='Enter Password' />
                        </div>
                    </Flex>
                    <Link to={'/'}><Button btnText={'Log in'}/></Link>
                </div>
                <div className="lg:w-[600px] py-20">
                    <Hadding className={'text-[29px] text-hoverC font-bold'} text={'New Customer'} as={'h3'}/>
                    <Hadding className={'text-base text-menuC leading-7 py-7'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."} as={'p'}/>
                    <Link to={'/'}><Button className={'bg-hoverC text-white'} btnText={'Continue'}/></Link>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Login
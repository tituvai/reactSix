import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Hadding from '../Hadding'
import { Link } from 'react-router-dom'
import Image from '../Image'
import logo from '/src/assets/Logo.png'
import { FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <section className='px-5 lg:px-0 py-[50px] bg-searchC'>
        <Container>
            <div className='lg:flex justify-between'>
                <div className="lg:w-[13%]">
                    <Hadding className={'text-base text-hoverC font-bold leading-9'} text={'MENU'} as={'h3'}/>
                    <ul>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Home</li></Link>
                        <Link to={'/shop'}><li className='text-sm text-footer leading-7'>Shop</li></Link>
                        <Link to={'/about'}><li className='text-sm text-footer leading-7'>About</li></Link>
                        <Link to={'/contact'}><li className='text-sm text-footer leading-7'>Contact</li></Link>
                        <Link to={'/journal'}><li className='text-sm text-footer leading-7'>Journal</li></Link>
                    </ul>
                </div>
                <div className="lg:w-[16%]">
                    <Hadding className={'text-base text-hoverC font-bold leading-9'} text={'SHOP'} as={'h3'}/>
                    <ul>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Category 1</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Category 2</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Category 3</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Category 4</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Category 5</li></Link>
                    </ul>
                </div>
                <div className="lg:w-[16%]">
                    <Hadding className={'text-base text-hoverC font-bold leading-9'} text={'HELP'} as={'h3'}/>
                    <ul>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Privacy Policy</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Terms & Conditions</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Special E-shop</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Shipping</li></Link>
                        <Link to={'/'}><li className='text-sm text-footer leading-7'>Secure Payments</li></Link>
                    </ul>
                </div>
                <div className="lg:w-[35%] lg:pl-[12px]">
                    <Hadding className={'text-base text-hoverC font-bold leading-9 lg:pr-[100px]'} text={'(052) 611-5711 company@domain.com'} as={'h3'}/>
                    <Hadding className={'text-sm text-footer leading-12'} text={'575 Crescent Ave. Quakertown, PA 18951'} as={'p'}/>
                </div>
                <div className="lg:w-[20%]">
                    <Link to={'/'}><Image imgSrc={logo} imgAlt={logo}/></Link>
                </div>
            </div>
            <Flex className={'justify-between pt-6 flex-col md:flex-row'}>
                <div className="flex gap-4 pb-5 lg:pb-0">
                    <Link to={'/'}><FaFacebookF/></Link>
                    <Link to={'/'}><FaLinkedinIn /></Link>
                    <Link to={'/'}><FaInstagram /></Link>
                </div>
                <div className="">
                    <Hadding className={'text-sm text-footer'} text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} as={'p'}/>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Footer
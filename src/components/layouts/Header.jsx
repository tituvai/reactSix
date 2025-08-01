import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import Bards from '../../assets/icon/Bards'
import Hadding from '../Hadding'
import { FaUser, FaCaretDown, FaShoppingCart, FaSearch, FaBars  } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";


const Header = () => {

// mobile Bars Part Start 
const [bars, setBars]=useState(false)

const handleBars = ()=>{
  setBars(!bars)  
}

// mobile Bars Part End
  return (
   <>
     <div className='py-8'>
        <Container>
            {/* Destop Divice Part Start  */}
           <div className="hidden lg:block">
             <Flex>
                <div className="">
                    <Link to={'/'}><Image imgSrc={logo} imgAlt={logo}/></Link>
                </div>
                <div className="m-auto">
                    <ul className='flex items-center gap-x-10'>
                        <Link to={'/'}><li className='text-sm text-menuC font-medium hover:text-hoverC'>Home</li></Link>
                        <Link to={'/shop'}><li className='text-sm text-menuC font-medium hover:text-hoverC'>Shop</li></Link>
                        <Link to={'/about'}><li className='text-sm text-menuC font-medium hover:text-hoverC'>About</li></Link>
                        <Link to={'/contact'}><li className='text-sm text-menuC font-medium hover:text-hoverC'>Contacts</li></Link>
                        <Link to={'/journal'}><li className='text-sm text-menuC font-medium hover:text-hoverC'>Journal</li></Link>
                    </ul>
                </div>
            </Flex>
           </div>
           {/* Destop Divice Part End */}


           {/* Mobile Part Start  */}
            <div className="lg:hidden">
                <Flex className={'justify-between'}>
                <div className="">
                    {bars ? <MdOutlineClear onClick={handleBars} className='text-2xl' /> : <FaBars onClick={handleBars} className='text-2xl' />}
                    
                    
                    </div>
                <div className="">
                    <Link to={'/'}><Image imgSrc={logo} imgAlt={logo}/></Link>
                </div>
                    
                <div className="flex items-center gap-x-5">
                <div className='flex items-center'>
                <FaUser/>
                <FaCaretDown/>
                </div>
                <FaShoppingCart/>
                </div>
                   
                </Flex>
               {bars && <div className="bg-searchC px-8 py-5 mt-5">
                        <div className="relative">
                        <input className='w-full p-[16px] outline-0 bg-white' type="text" placeholder='Search Products' />
                        <FaSearch className='absolute top-1/2 right-4 -translate-y-1/2 text-xl'/>
                        </div>
                         <ul className='pt-5'>
                        <Link to={'/'}><li className='text-sm text-menuC font-medium hover:text-hoverC pb-3'>Home</li></Link>
                        <Link to={'/shop'}><li className='text-sm text-menuC font-medium hover:text-hoverC pb-3'>Shop</li></Link>
                        <Link to={'/about'}><li className='text-sm text-menuC font-medium hover:text-hoverC pb-3'>About</li></Link>
                        <Link to={'/contact'}><li className='text-sm text-menuC font-medium hover:text-hoverC pb-3'>Contacts</li></Link>
                        <Link to={'/journal'}><li className='text-sm text-menuC font-medium hover:text-hoverC pb-3'>Journal</li></Link>
                    </ul>
                </div>}
            </div> 

             {/* Mobile Part End */}
        </Container>
    </div>

    <div className='py-6.5 bg-searchC hidden lg:block'>
        <Container>
            <Flex className={'justify-between'}>
                <div className="flex items-center gap-3">
                    <Bards id='menuBar'/>
                    <Hadding className={'text-sm text-hoverC'} text={'Shop by Category'} as={'h4'}/>
                </div>
                <div className="relative">
                    <input className='w-[600px] p-[16px] outline-0 bg-white' type="text" placeholder='Search Products' />
                    <FaSearch className='absolute top-1/2 right-4 -translate-y-1/2 text-xl'/>
                </div>
                <div className="flex items-center gap-5">
                    <div className='flex items-center'>
                        <FaUser/>
                        <FaCaretDown/>
                    </div>
                    <FaShoppingCart/>
                </div>
            </Flex>
        </Container>    
    </div>
   </>
 
  )
}

export default Header
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import Bards from '../../assets/icon/Bards'
import Hadding from '../Hadding'
import { FaUser, FaCaretDown, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
   <>
     <section className='py-8'>
        <Container>
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
        </Container>
    </section>

    <section className='py-6.5 bg-searchC'>
        <Container>
            <Flex className={'justify-between'}>
                <div className="flex items-center gap-3">
                    <Bards/>
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
    </section>
   </>
 
  )
}

export default Header
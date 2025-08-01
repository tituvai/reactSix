import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import jarbati from '/src/assets/jarbati.png'
import whact from '/src/assets/whact.png'
import lemp from '/src/assets/lemp.png'

const Ads = () => {

 
  return (
    <>
    <div className="pt-[75px] pb-[50px]">
        <Container>
            <Flex className={'justify-between flex-col md:flex-row'}>
                <div className="w-full lg:w-[49%] pb-7 lg:pb-0">
                    <Link to={'/'}>
                    <Image imgSrc={jarbati} imgAlt={jarbati} />
                    </Link>
                </div>
                <div className="w-full lg:w-[49%]">
                    <Link to={'/'}><Image imgSrc={whact} imgAlt={whact} className={'w-[100%] mb-7'} /></Link>
                    <Link to={'/'}><Image imgSrc={lemp} imgAlt={lemp} className={'w-[100%]'}/></Link>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Ads
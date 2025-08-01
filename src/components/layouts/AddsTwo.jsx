import React from 'react'
import Container from '../Container'
import Image from '../Image'
import adds from '/src/assets/Ads_2.png'
import { Link } from 'react-router-dom'
const AddsTwo = () => {
  return (
    <>
        <div className=" lg:py-15">
            <Container>
                <div className="">
                    <Link to={'/'}><Image className={'w-full'} imgSrc={adds} imgAlt={adds}/></Link>
                </div>
            </Container>
        </div>
    </>
  )
}

export default AddsTwo
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Hadding from '../Hadding'
import { PiNumberTwoBold } from "react-icons/pi";
import { MdLocalShipping } from "react-icons/md";
import { FaUndo } from "react-icons/fa";

const Information = () => {

  return (
    <div className="py-4">
        <Container>
            <Flex className={'justify-between'}>
                <div className="flex lg:items-center gap-2">
                    <PiNumberTwoBold className='text-xl'/>
                    <Hadding className={'text-xs lg:text-base text-footer'} text={'Two years warranty'} as={'h5'}/>
                </div>
                <div className="flex lg:items-center gap-2">
                    <MdLocalShipping className='text-xl'/>
                    <Hadding className={'text-xs lg:text-base text-footer'} text={'Free shipping'} as={'h5'}/>
                </div>
                <div className="flex lg:items-center gap-2">
                    <FaUndo/>
                    <Hadding className={'text-xs lg:text-base text-footer'} text={'Return policy in 30 days'} as={'h5'}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Information
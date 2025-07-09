
import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import bottol from '/src/assets/bottol.png'
import whiteBag from '/src/assets/whiteBag.png'
import cup from '/src/assets/cup.png'
import blackBag from '/src/assets/blackBag.png'
import Hadding from '../Hadding'

const BestSeller = () => {
  return (
    <>
        <div className="py-18">
            <Container>
                <div className="">
                    <Hadding className={'text-[39px] text-hoverC font-bold pb-8'} text={'Bestseller'} as={'h3'} />
                </div>
                <Flex className={'justify-between'}>
                    <div className="w-[25%]">
                        <Product productSrc={bottol} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$3.34'}/>
                    </div>
                    <div className="w-[25%]">
                        <Product productSrc={whiteBag} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$4.04'}/>
                    </div>
                    <div className="w-[25%]">
                        <Product productSrc={cup} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$1.94'}/>
                    </div>
                    <div className="w-[25%]">
                        <Product productSrc={blackBag} newProduct={'New'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$5.00'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default BestSeller
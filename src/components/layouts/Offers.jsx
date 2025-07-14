import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../Product'
import cap from '/src/assets/cap.png'
import maicuPhone from '/src/assets/maicuPhone.png'
import table from '/src/assets/table.png'
import sanglass from '/src/assets/sanglass.png'
import Hadding from '../Hadding'

const Offers = () => {
  return (
    <>
        <div className="pt-8 pb-15">
            <Container>
                <div className="">
                    <Hadding className={'text-[49px] text-hoverC font-bold pb-9'} text={'Special Offers'} as={'h3'}/>
                </div>
                <Flex className={'justify-between'}>
                    <div className="w-[24%]">
                        <Product productSrc={cap} newProduct={"20%"} productPrice={'$44.00'} producttTitle={'Basic Crew Neck Tee'}/>
                    </div>
                    <div className="w-[24%]">
                        <Product productSrc={maicuPhone} newProduct={"35%"} productPrice={'$34.00'} producttTitle={'Basic Crew Neck Tee'}/>                            
                    </div>
                    <div className="w-[24%]">
                        <Product productSrc={table} newProduct={"25%"} productPrice={'$57.00'} producttTitle={'Basic Crew Neck Tee'}/>
                    </div>
                    <div className="w-[24%]">
                        <Product productSrc={sanglass} newProduct={"5%"} productPrice={'$60.00'} producttTitle={'Basic Crew Neck Tee'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Offers
import React from 'react'
import Image from './Image'
import Hadding from './Hadding'
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Flex from './Flex';
import Compar from '../assets/icon/Compar';

const Product = ({productSrc, newProduct, producttTitle, productPrice, productAlt}) => {
  return (
    <>
        <div className=" relative group">
            <Image className={'h-[300px]'} imgSrc={productSrc} imgAlt={productAlt}/>
                {newProduct &&(<Hadding className={'py-2 px-8 bg-hoverC text-sm text-white font-bold absolute top-5 left-5'} text={newProduct} as={'h4'} />)}
                <div className="p-7.5 bg-white absolute left-0 bottom-12 w-full opacity-0 group-hover:opacity-100 transition-all  ease-in-out translate-y-4 group-hover:translate-y-0 duration-700">
                    <Flex className={'gap-2 justify-end'}>
                        <Hadding className={'hover:text-hoverC hover:font-bold  text-base text-menuC'} text={'Add to Wish List'} as={'p'} />
                        <FaHeart/>     
                    </Flex> 
                    <Flex className={'gap-2 justify-end py-3'}>
                        <Hadding className={'hover:text-hoverC hover:font-bold  text-base text-menuC'} text={'Compare'} as={'p'} />
                        <Compar/>    
                    </Flex> 
                    <Flex className={'gap-2 justify-end'}>
                        <Hadding className={'hover:text-hoverC hover:font-bold  text-base text-menuC'} text={'Add to Cart'} as={'p'} />
                        <FaShoppingCart/>     
                    </Flex> 
                </div>
                <div className="py-6 px-2">
                   <Flex className={'justify-between'}>
                    <Hadding className={'text-lg text-hoverC font-bold'} text={producttTitle} as={'h5'} />
                    <Hadding className={'text-base text-menuC'} text={productPrice} as={'p'} />
                   </Flex>
                </div>
        </div>
    </>
  )
}

export default Product
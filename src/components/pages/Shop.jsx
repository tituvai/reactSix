import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"
import Hadding from "../Hadding"
import { FaAngleRight } from "react-icons/fa6";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Product from "../Product";
import cap from '/src/assets/cap.png'
import cup from '/src/assets/cup.png'
import cat from '/src/assets/cat.png'
import timeBox from '/src/assets/timeBox.png'
import topjuri from '/src/assets/topJuri.png'
import whiteBag from '/src/assets/whiteBag.png'
import blackBag from '/src/assets/blackBag.png'
import micuPhon from '/src/assets/maicuPhone.png'
import table from '/src/assets/table.png'
import whact from '/src/assets/whact (2).png'
import juri from '/src/assets/juri.png'
import bottol from '/src/assets/bottol.png'
import { useState } from "react";


const Shop = () => {

// Color Dropdown Part Start 
const [color, setColor]=useState(false)
const handelColor =()=>{
  setColor(!color)
}
// Color Dropdown Part End

// handelBrand Part Start 

const [brand, setBrand]= useState(false)
const handelBrand = ()=>{
  setBrand(!brand)
}
// handelBrand Part End

  return (
    <>
        <div className="">
          <Container>
            <div className="py-[120px]">
              <Hadding className={'text-[49px] text-hoverC font-bold'} text={'Products'} as={'h3'}/>
              <Flex className={'gap-3'}>
                <Link to={'/'}><span className="text-sm text-menuC">Home</span></Link>
                <FaAngleRight className="text-menuC text-sm"/>
                <Link to={'/'}><span className="text-sm text-menuC">Products</span></Link>
              </Flex>
            </div>
            <div className="">
              <div className={'flex justify-between'}>
                <div className="w-[265px] pr-8">
                  <div className="">
                    <Hadding className={'text-lg text-hoverC font-bold pb-2'} text={'Shop by Category'} as={'h5'}/>
                    <Flex className={'justify-between border-b-1 border-borderC py-4'}>
                      <Hadding className={'text-base text-menuC leading-7.5'} text={'Category 1'} as={'h6'}/>
                      <span className="text-lg font-bold text-menuC">+</span>
                    </Flex>
                      <Hadding className={'text-base text-menuC leading-7.5 border-b-1 border-borderC py-4'} text={'Category 1'} as={'h6'}/>

                    <Flex className={'justify-between border-b-1 border-borderC py-4'}>
                      <Hadding className={'text-base text-menuC leading-7.5'} text={'Category 1'} as={'h6'}/>
                      <span className="text-lg font-bold text-menuC">+</span>
                    </Flex>
                      <Hadding className={'text-base text-menuC leading-7.5 border-b-1 border-borderC py-4'} text={'Category 1'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC leading-7.5 border-b-1 border-borderC py-4'} text={'Category 1'} as={'h6'}/>
                  </div>
                  <div className="">
                     <Flex className={'justify-between pt-7'}>
                      <Hadding className={'text-lg text-hoverC font-bold '} text={'Shop by Category'} as={'h4'}/>
                        {color ? <FaCaretDown onClick={handelColor} className="text-menuC text-xl"/> : <FaCaretUp onClick={handelColor} className="text-menuC text-xl"/>}
                      
                     
                     </Flex>
                    {color && <div className="">
                       <div className="relative border-b-1 border-borderC py-2">
                      <Hadding className={'text-base text-menuC leading-7.5 pl-5'} text={'Color 1'} as={'p'}/>
                        <div className="w-[10px] h-[10px] bg-black rounded-full absolute top-[18px] left-0"></div>
                     </div>
                      <div className="relative border-b-1 border-borderC py-2">
                      <Hadding className={'text-base text-menuC leading-7.5 pl-5'} text={'Color 2'} as={'p'}/>
                        <div className="w-[10px] h-[10px] bg-red-500 rounded-full absolute top-[18px] left-0"></div>
                     </div>
                      <div className="relative border-b-1 border-borderC py-2">
                      <Hadding className={'text-base text-menuC leading-7.5 pl-5'} text={'Color 3'} as={'p'}/>
                        <div className="w-[10px] h-[10px] bg-teal-300 rounded-full absolute top-[18px] left-0"></div>
                     </div>
                      <div className="relative border-b-1 border-borderC py-2">
                      <Hadding className={'text-base text-menuC leading-7.5 pl-5'} text={'Color 4'} as={'p'}/>
                        <div className="w-[10px] h-[10px] bg-yellow-200 rounded-full absolute top-[18px] left-0"></div>
                     </div>
                      <div className="relative border-b-1 border-borderC py-2">
                      <Hadding className={'text-base text-menuC leading-7.5 pl-5'} text={'Color 5'} as={'p'}/>
                        <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute top-[18px] left-0"></div>
                     </div>
                    </div>}
                  </div>
                  <div className="">
                    <Flex className={'justify-between pt-7'}>
                      <Hadding className={'text-lg text-hoverC leading-7.5 font-bold '} text={'Shop by Brand'} as={'h5'}/>
                      {brand ? <FaCaretDown onClick={handelBrand} className="text-xl text-menuC"/> : <FaCaretUp onClick={handelBrand} className="text-menuC text-xl"/>}
                    </Flex>
                    {brand && <div className="">
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'Brand 1'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'Brand 2'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'Brand 3'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'Brand 4'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'Brand 5'} as={'h6'}/>
                    </div>}
                  </div>
                  <div className="">
                      <Hadding className={'text-lg text-hoverC leading-7.5 font-bold pt-7'} text={'Shop by Price'} as={'h5'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'$0.00 - $9.99'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'$10.00 - $19.99'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'$20.00 - $29.99'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'$30.00 - $39.99'} as={'h6'}/>
                      <Hadding className={'text-base text-menuC border-b-1 border-borderC py-3'} text={'$40.00 - $69.99'} as={'h6'}/>
                  </div>
                </div>
                <div className="w-[900px]">
                  <div className=" pb-9 flex gap-19 justify-end">
                  <div className="flex items-center gap-x-3">
                    <Hadding className={'text-base text-menuC leading-7.5'} text={'Sort by:'} as={'h5'}/>
                    <div className="w-[249px] py-2 px-5 flex justify-between items-center border-borderC border-1">
                      <Hadding className={'text-base text-menuC leading-7.5'} text={'Featured'} as={'h5'}/>
                      <FaCaretDown className="text-menuC"/>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <Hadding className={'text-base text-menuC leading-7.5'} text={'Show:'} as={'h5'}/>
                    <div className="w-[149px] py-2 px-5 flex justify-between items-center border-borderC border-1">
                      <Hadding className={'text-base text-menuC leading-7.5'} text={'36'} as={'h5'}/>
                      <FaCaretDown className="text-menuC"/>
                    </div>
                  </div> 
                </div>
                    <div className="flex items-center justify-between flex-wrap gap-y-5">
                      <div className="w-[32%]">
                      <Product productSrc={cap} productAlt={'cap.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={cup} productAlt={'cup.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={cat} productAlt={'cat.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                      <div className="w-[32%]">
                      <Product productSrc={timeBox} productAlt={'timeBox.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={topjuri} productAlt={'topJuri.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={whiteBag} productAlt={'whiteBag.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                      <div className="w-[32%]">
                      <Product productSrc={blackBag} productAlt={'blackBag.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={micuPhon} productAlt={'maicuPhone.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={table} productAlt={'table.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                      <div className="w-[32%]">
                      <Product productSrc={whact} productAlt={'whact (2).png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={juri} productAlt={'juri.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'}/>
                    </div>
                    <div className="w-[32%]">
                      <Product productSrc={bottol} productAlt={'bottol.png'} producttTitle={'Basic Crew Neck Tee'} productPrice={'$44.00'} newProduct={'New'}/>
                    </div>
                    </div>
                      <Flex className={'justify-between pt-10 pb-22'}>
                        <div className="">
                          <ul className="flex gap-3">
                            <li className="text-sm py-2 px-6 border-borderC text-menuC border-1 hover:bg-hoverC hover:text-white">1</li>
                            <li className="text-sm py-2 px-6 border-borderC text-menuC border-1 hover:bg-hoverC hover:text-white">2</li>
                            <li className="text-sm py-2 px-6 border-borderC text-menuC border-1 hover:bg-hoverC hover:text-white">3</li>
                            <li className="text-sm py-2 px-6 border-borderC text-menuC border-1 hover:bg-hoverC hover:text-white">4</li>
                            <li className="text-sm py-2 px-6 border-borderC text-menuC border-1 hover:bg-hoverC hover:text-white">5</li>
                          </ul>
                        </div>
                        <div className="">
                          <Hadding className={'text-sm text-menuC'} text={'Products from 1 to 12 of 80'} as={'p'}/>
                        </div>
                      </Flex>
                </div>
              </div>
             
            </div>
          </Container>
        </div>
    </>
  )
}

export default Shop
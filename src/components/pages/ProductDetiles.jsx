import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa6";
import Image from '../Image';
import topjuri from '/src/assets/topJuri.png'
import sanglass from '/src/assets/sanglass.png'
import table from '/src/assets/table.png'
import mricoPhone from '/src/assets/maicuPhone.png'
import Hadding from '../Hadding';
import { FaStar, FaStarHalf } from "react-icons/fa6";
import Button from '../Button';
import { FaCaretDown } from "react-icons/fa";


const ProductDetiles = () => {
    // count Downt Part Start 

    const [count, setCount] = useState(0)

    const declement = ()=>{
         if(count > 0){
            setCount(count - 1)
         }  
            
    }
    const inclement = ()=>{
           setCount(count + 1) 
            
    }
   
  return (
    <>
        <div className="">
            <Container>
                <div className="py-10">
                    <Flex className={'gap-x-3'}>
                        <Link to={'/'}><span className='text-sm text-footer'>Home</span></Link>
                        <FaAngleRight className='text-footer text-sm'/>
                        <Link to={'/'}><span className='text-sm text-footer'>Products</span></Link>
                    </Flex>
                </div>
                <Flex className={'flex-wrap justify-between gap-y-10'}>
                    <div className="w-[48%]"><Image className={'w-full'} imgSrc={topjuri} imgAlt={'topjuri.png'}/></div>
                    <div className="w-[48%]"><Image className={'w-full'} imgSrc={sanglass} imgAlt={'sanglass.png'}/></div>
                    <div className="w-[48%]"><Image className={'w-full'} imgSrc={table} imgAlt={'table.png'}/></div>
                    <div className="w-[48%]"><Image className={'w-full'} imgSrc={mricoPhone} imgAlt={'maicuPhone.png'}/></div>
                </Flex>

                <div className="w-[48%] pb-20 pt-12">
                    <Hadding className={'text-[49px] text-hoverC font-bold'} text ={'Product'} as={'h4'} /> 
                    <Flex className={'text-yellow-400'}>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalf />
                        <Hadding className='text-sm text-menuC pl-3' text={'1 Review'} as={'h6'}/>
                    </Flex>
                    <Flex className={'gap-x-3 py-5 border-b-1 border-borderC mb-4'}>
                        <del className='text-base text-menuC'>$88.00</del>
                        <Hadding className={'text-xl font-bold text-hoverC'} text={'$44.00'} as={'h6'}/>
                    </Flex>
                    <Flex className={'gap-x-3 py-7'}>
                        <Hadding className={'text-base text-hoverC font-bold leading-6 uppercase pr-8'} text={'COLOR:'} as={'h4'}/>
                        <div className="w-[20px] h-[20px] scale-95 hover:scale-115 rounded-full bg-[#000000]"></div>
                        <div className="w-[20px] h-[20px] scale-95 hover:scale-115 rounded-full bg-[#FF8686]"></div>
                        <div className="w-[20px] h-[20px] scale-95 hover:scale-115 rounded-full bg-[#7ED321]"></div>
                        <div className="w-[20px] h-[20px] scale-95 hover:scale-115 rounded-full bg-[#B6B6B6]"></div>
                        <div className="w-[20px] h-[20px] scale-95 hover:scale-115 rounded-full bg-[#15CBA5]"></div>
                    </Flex>
                    <Flex className={'gap-x-17'}>
                       <Hadding className={'text-base text-hoverC font-bold leading-6 uppercase'} text={'SIZE:'} as={'h4'}/> 
                       <div className="flex w-[100px] py-1 px-5 border-1 border-menuC gap-x-10 items-center">
                        <ul>
                            <li className='text-base text-menuC'>s</li>
                        </ul>
                        <FaCaretDown className='text-base text-menuC'/>
                       </div>
                    </Flex>
                    <Flex className={'py-7 border-b-1 border-borderC gap-x-6'}>
                        <Hadding className={'text-base font-bold leading-6 text-hoverC'} text={'QUANTITY:'} as={'h6'}/>
                        <div className="flex w-[100px] py-1 px-3 border-1 border-menuC gap-x-5 items-center">
                            <button className='text-base text-menuC' onClick={declement}>-</button>
                            <Hadding className={'w-[50px] text-base text-menuC leading-7.5'} text= {`${count}`} as={'h6'}/>
                            <button className='text-base text-menuC' onClick={inclement}>+</button>
                        </div>
                    </Flex>
                    <Flex className={'gap-5 py-7 border-b-1 border-borderC'}>
                        <Hadding className={'text-base font-bold text-hoverC leading-6'} text={'STATUS:'} as={'h6'}/>
                        <Hadding className={'text-base  text-menuC leading-6'} text={'In stock'} as={'h6'}/>
                    </Flex>
                    <div className="py-7 border-b-1 border-borderC">
                        <Link to={'/'}><Button btnText={'Add to Wish List'}/></Link>
                        <Link to={'/'}><Button className={'text-white bg-black ml-5'} btnText={'Add to Cart'}/></Link>
                    </div>
                    <Flex className={'justify-between py-7 border-b-1 border-borderC'}>
                        <Hadding className={'text-base text-hoverC font-bold leading-6'} text={'FEATURES  & DETAILS'} as={'h6'}/>
                        <Hadding className={'text-xl text-hoverC font-bold leading-6'} text={'+'} as={'h6'}/>
                    </Flex>
                    <Flex className={'justify-between py-7 border-b-1 border-borderC'}>
                        <Hadding className={'text-base text-hoverC font-bold leading-6'} text={'SHIPPING & RETURNS'} as={'h6'}/>
                        <Hadding className={'text-xl text-hoverC font-bold leading-6'} text={'+'} as={'h6'}/>
                    </Flex>
                    <Hadding className={'text-base text-menuC leading-7.5 pt-5'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} as={'p'}/>
                </div>
                <div className="">
                    <Flex className={'gap-x-13'}>
                        <Hadding className={'text-xl text-menuC'} text={'Description'} as={'h5'}/>
                        <Hadding className={'text-xl text-hoverC font-bold'} text={'Reviews (1)'} as={'h5'}/>
                    </Flex>
                        <Hadding className={'text-sm text-menuC py-7 border-b-1 border-borderC'} text={'1 review for Product'} as={'h5'}/>

                        <Flex className={'justify-between pt-4'}>
                            <div className="flex items-center text-yellow-400">
                                <Hadding className={'text-base text-hoverC pr-5'} text={'John Ford'} as={'h6'}/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalf />
                            </div>
                                <Hadding className={'text-base text-menuC'} text={'6 months ago'} as={'h6'}/>
                        </Flex>
                        <Hadding className={'text-base text-menuC leading-7.5 border-b-1 border-borderC py-5'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."} as={'p'}/>
                </div>
                <div className="w-[780px] pt-12 pb-50">
                    <Hadding className={'text-xl text-hoverC font-bold '} text={'Add a Review'} as={'h5'}/>
                    <label htmlFor="#" className='block text-base font-bold text-hoverC pt-8'>Name</label>
                    <input type="text" placeholder='Your name here' className='w-full outline-0 border-b-1 border-borderC placeholder:text-sm placeholder:text-menuC py-3'/>
                    <label htmlFor="#" className='block text-base font-bold text-hoverC pt-4'>Email</label>
                    <input type="text" placeholder='Your email here' className='w-full outline-0 border-b-1 border-borderC placeholder:text-sm placeholder:text-menuC py-3'/>
                    <label htmlFor="#" className='block text-base font-bold text-hoverC pt-4'>Review</label>
                    <textarea name="" id="" className='h-[138px] w-full py-3 outline-0 border-b-1 border-borderC placeholder:text-sm placeholder:text-menuC' placeholder='Your review here '></textarea>
                    <Link to={'/'}><Button className={'text-white bg-hoverC mt-5'} btnText={'Post'}/></Link>
                </div>
            </Container>
        </div>
    </>
  )
}

export default ProductDetiles
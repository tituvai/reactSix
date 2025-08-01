import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
const PrevArrow = (props) => {
    const {onClick } = props;
  return (
      <div
      className={'hidden h-[40px] w-[40px] rounded-full bg-arrowC absolute top-1/3 right-0  z-20 lg:flex items-center justify-center cursor-pointer'}
      onClick={onClick}
    ><FaLongArrowAltRight className='text-2xl text-white'/></div>
  )
}

export default PrevArrow
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
const NextArrow = (props) => {
    const { onClick } = props;
  return (
     <div
      className={' h-[40px] w-[40px] rounded-full bg-arrowC absolute top-1/3 left-0  flex items-center justify-center cursor-pointer'}
      onClick={onClick}
    ><FaLongArrowAltLeft className='text-2xl text-white'/></div>
  )
}

export default NextArrow
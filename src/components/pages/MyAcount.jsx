import React from "react";
import Hadding from "../Hadding";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const MyAcount = () => {
  return (
    <>
      <div className="py-20">
        <Hadding className={"text-[49px] text-hoverC font-bold"}text={"My Account"}as={"h3"} />
        <Flex className={"gap-x-3"}>
          <Link to={"/"}><span className="text-sm text-footer">Home</span></Link>
          <FaAngleRight className="text-footer text-sm" />
          <Link to={"/"}><span className="text-sm text-footer">My Account</span></Link>
        </Flex>
      </div>
    </>
  );
};

export default MyAcount;

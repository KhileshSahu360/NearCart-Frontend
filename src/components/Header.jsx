import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <div className="lg:fixed md:fixed relative z-50  w-full h-16 bg-mainColor">
        <div className="lg:px-10 px-4 md:px-10 flex items-center justify-between h-16 lg:pl-12 md:pl-12">
          <NavLink to={"/"} className="flex items-center gap-1">
            <label htmlFor="" className="-mt-1 cursor-pointer">
              <HiShoppingBag color="white" fontSize={"1.5rem"} />
            </label>
            <label
              htmlFor=""
              className="tracking-wide cursor-pointer text-white text-[1.3rem]"
            >
              NearCart
            </label>
          </NavLink>
          <div className="lg:block hidden md:block">
            <SearchComponent width={'350px'}/>
          </div>
          <NavLink className={"lg:block hidden md:block"} to={"/favorite"}>
            <label
              htmlFor=""
              className="cursor-pointer  text-white text-[1.2rem]"
            >
              Favorite
            </label>
          </NavLink>
        <div className="lg:hidden block md:hidden z-[1000]">
          <MobileNav/>
        </div>
        </div>
      </div>
      <div className="w-full h-14 lg:hidden flex sticky top-0 z-50 shadow-md  md:hidden bg-slate-100  justify-center items-center">
        <SearchComponent />
      </div>
    </>
  );
};



const SearchComponent = ({width}) => {
  return (
    <div className={`flex ${width?`w-[${width}]`:'w-[90%]'} rounded-lg`}>
      <input
        type="text"
        placeholder="Search..."
        className="min-w-[80%] text-[1.1rem] border-r-2 tracking-normal rounded-l-lg py-[6px] px-2 outline-none"
      />
      <button className="w-full flex items-center justify-center bg-white rounded-r-lg">
        <IoSearch />
      </button>
    </div>
  );
};

export default Header;

"use client";
import React, { useState } from "react";
import "./navbarHelper.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleChange = () => {
    setShow(!show);
  };

  return (
    <div className="shadow-lg">
      <div className="flex mx-auto justify-between items-center md:px-8 md:py-5 max-w-[1280px] ">
        <div className="logo_div flex flex-col scale-80 md:scale-100">
          <span className="text-4xl font-bold text-black">Skilldify</span>
          <p className="sm:mt-[5px] mt-[3px] flex flex-wrap">
            <span className="text-[#f8471e] uppercase font-bold">
              Performance-
            </span>
            <span className="text-black uppercase font-bold">
              Productivity-
            </span>
            <span className="text-[#1ab0c1] uppercase font-bold">People </span>
          </p>
        </div>

        <ul className="nav_list hidden lg:flex gap-10 text-black">
          <li className="list-none uppercase cursor-pointer hover:underline font-semibold">
            Home
          </li>
          <li className="list-none uppercase cursor-pointer hover:underline font-semibold">
            About us
          </li>
          <li className="list-none uppercase cursor-pointer hover:underline font-semibold">
            Contact us
          </li>

          <li className="more_list_item list-none uppercase cursor-pointer hover:underline font-semibold relative">
            more
            <i className="fa-solid fa-chevron-down ml-[5px]"></i>
            <div className="more_dropdown  px-2 absolute w-[240px] py-3 rounded-lg">
              <div className="flex flex-col gap-1">
                <li className="more_list py-3 px-1">Terms and Conditions</li>
                <li className="more_list py-3 px-1">Privacy Policy</li>
                <li className="more_list py-3 px-1">Shipping and Delivery</li>
                <li className="more_list py-3 px-1">
                  Refund and Cancellation policy
                </li>
              </div>
            </div>
          </li>
        </ul>

        <div className="hidden lg:flex flex-col text-black">
          <span className="have_question font-semibold">
            Have any questions?
          </span>
          <p className="phone_number text-xl md:text-xl font-bold items-right">
            +91 8700786057
          </p>
        </div>

        {/* <div
        onClick={handleChange}
        className={`lg:hidden fa-solid  absolute text-black text-3xl right-5 ${
          show
            ? "translate-x-[-185px] duration-100 fa-xmark"
            : "translate-x-0 duration-100 fa-bars"
        }`}
      >
        <AiOutlineMenu />
      </div> */}
        <AiOutlineMenu
          onClick={handleChange}
          className={`lg:hidden  absolute text-black text-3xl right-5 
        //   show
        //     ? "translate-x-[-185px] duration-100 fa-xmark"
        //     : "translate-x-0 duration-100 fa-bars"
        `}
        />

        <div
          className={`show_div text-black absolute top-0 bottom-0 right-[0] w-[250px]  bg-opacity-60 backdrop-blur-md shadow-lg  ${
            show
              ? "flex flex-col duration-300"
              : "translate-y-[-120%] duration-300"
          }`}
        >
          <div className="relative mt-[30px]">
            <RxCross1
              className={`absolute text-black text-3xl right-5 top-[-40px] `}
              onClick={handleChange}
            />
            <ul>
              <li className="list-none text-xl uppercase mb-[15px]">more</li>
              <li className="list-none text-xl uppercase mb-[15px]">
                About us
              </li>
              <li className="list-none text-xl uppercase mb-[15px]">
                Contact us
              </li>
              <li className="list-none text-xl uppercase mb-[30px]">More</li>
            </ul>
            <div className="flex flex-col text-black">
              <span className="have_question font-semibold">
                Have any questions?
              </span>
              <p className="phone_number text-[0.9rem] md:text-xl font-bold items-right">
                +91 8700786057
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

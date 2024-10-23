import React, { useState } from "react";
import { Menu, PhoneCall, Search, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="lg:px-16 py-6 md:px-10 px-6 bg-[#09090b] relative">
        <div className="flex justify-between items-center mb-4">
          {openMenu ? (
            <X
              color="#fafafa"
              className="lg:hidden opacity-65 hover:opacity-80 transition duration-300 cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          ) : (
            <Menu
              color="#fafafa"
              className="lg:hidden opacity-65 hover:opacity-80 transition duration-300 cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
          )}

          <Link to={"/"}>
            <img
              src="../../public/images/mhlogo.png"
              className="object-contain w-24 h-16"
            />
          </Link>
          <span className="w-1/3 px-4 py-2 rounded-lg bg-[#fafafa] hidden lg:flex items-center border-0 focus-within:border-2 focus-within:border-[#e2e2e2] gap-2 ">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none"
            />
            <Search color="#09090b" />
          </span>
          <PhoneCall
            color="#fafafa"
            className="opacity-65 hover:opacity-80 transition duration-300 cursor-pointer"
          />
        </div>
        <span className="w-full px-4 py-2 rounded-lg bg-[#fafafa] flex lg:hidden items-center border-0 focus-within:border-2 focus-within:border-[#e2e2e2] gap-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none"
          />
          <Search color="#09090b" />
        </span>
        <nav className="hidden lg:flex gap-20 text-[#e2e2e2]  justify-center items-center">
          <Link
            to={"/"}
            className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
          >
            Home
          </Link>
          <Link
            to={"/shop"}
            className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
          >
            Shop
          </Link>
          <Link
            to={"/shop"}
            className="hover:text-[#fafafa] transition duration-300 opacity-65 hover:opacity-80 "
          >
            Service
          </Link>
          <Link
            to={"/about"}
            className="hover:text-[#fafafa] transition duration-300 opacity-65 hover:opacity-80 "
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="px-3 py-1 rounded-lg bg-[#fafafa] text-[#09090b] hover:bg-[#e2e2e2] transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
      {openMenu && (
        <nav className="absolute top-24 py-4 px-12 flex flex-col gap-2 w-full bg-[#09090b] text-[#e2e2e2] justify-center items-center pb-6">
          <Link to={"/"} className="hover:text-[#fafafa] opacity-80 ">
            Home
          </Link>
          <Link to={"/shop"} className="hover:text-[#fafafa] opacity-80 ">
            Shop
          </Link>
          <Link to={"/shop"} className="hover:text-[#fafafa]  opacity-80 ">
            Service
          </Link>
          <Link to={"/about"} className="hover:text-[#fafafa]  opacity-80 ">
            About
          </Link>
          <Link
            to={"/contact"}
            className="px-3 py-1 text-center rounded-lg w-full bg-[#fafafa] text-[#09090b] hover:bg-[#e2e2e2] transition duration-500"
          >
            Contact
          </Link>
        </nav>
      )}
    </>
  );
};

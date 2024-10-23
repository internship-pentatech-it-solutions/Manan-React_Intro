import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#09090b] flex flex-col justify-center items-center lg:p-10 p-6 md:p-10 gap-10">
      <div className="flex flex-col lg:flex-row md:flex-row justify-between lg:gap-32 md:gap-30 gap-4 md:gap-16 text-[#fafafa] w-full">
        <span className="lg:w-3/4 md:w-2/3 w-full flex flex-col gap-2">
          <img
            src="../../public/images/mhlogo.png"
            className="object-contain w-24 h-20"
          />
          <div className="opacity-80">
            Mattress Home is dedicated to providing quality and affordable
            mattresses for your best rest. Our mission is to ensure that
            everyone can enjoy a good night's sleep with our wide range of
            products.
          </div>
        </span>
        <span className="w-full md:w-1/4 lg:w-1/3 flex flex-col gap-4 pt-4">
          <div className="uppercase font-semibold">Follow Us</div>
          <div className="flex flex-col gap-2">
            <Link
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
              to={"https://facebook.com/mattresshome"}
            >
              Facebook
            </Link>
            <Link
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
              to={"https://twitter.com/mattresshome"}
            >
              X (Formally Twitter)
            </Link>
            <Link
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
              to={"https://instagram.com/mattresshome"}
            >
              Instagram
            </Link>
            <Link
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
              to={"https://linkedin.com/company/mattresshome"}
            >
              LinkedIn
            </Link>
          </div>
        </span>
        <span className="w-full md:w-1/4 lg:w-1/3 flex flex-col gap-4 pt-4">
          <div className="uppercase font-semibold">Quick Links</div>
          <div className="flex flex-col gap-2">
            <Link
              to={"/shop"}
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
            >
              View Product
            </Link>
            <Link
              to={"/about"}
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
            >
              About Us
            </Link>
            <Link
              to={"/service"}
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
            >
              Services
            </Link>
            <Link
              to={"/contact"}
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </span>
        <span className="w-full md:w-1/4 lg:w-1/3 flex flex-col gap-4 pt-4">
          <div className="uppercase font-semibold">Legal</div>
          <div className="flex flex-col gap-2">
            <Link
              to={"/"}
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/"}
              className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
            >
              Terms and Conditions
            </Link>
          </div>
        </span>
      </div>
      <hr className="border-1 w-full border-[#e2e2e2] opacity-40" />
      <div className="flex flex-col items-center text-[#fafafa]">
        &copy;{currentYear} Mattress Home
        <span>
          Developed by{" "}
          <Link
            to={"https://github.com/ABZABI"}
            className="hover:text-[#fafafa] opacity-65 hover:opacity-80 transition duration-300"
          >
            Abdul-Manan Mahama
          </Link>
        </span>
      </div>
    </div>
  );
};

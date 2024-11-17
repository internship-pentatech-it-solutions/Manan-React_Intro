import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Layers, CloudUpload, UserRoundCog, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Service = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex gap-16 p-16 justify-center">
        <div className="flex flex-col gap-8 w-2/5">
          <span className="flex flex-col gap-2">
            <h1 className="text-2xl text-[#0056B3]">Sleep Better</h1>
            <h1 className="text-3xl font-semibold">
              Our Services | Mattress Home
            </h1>
          </span>
          <p className="mb-2 leading-8 text-lg">
            At Mattress Home, we are dedicated to providing top-notch services
            that cater to your sleep needs. Whether you need a new mattress or
            wish to restore your old one, we have the perfect solution for you.
          </p>
          <span className="flex flex-col gap-4 mb-4">
            <div className="flex gap-4">
              <Layers size={36} color="#0056B3" />
              <p className="leading-8">
                <span className="font-semibold">New Mattresses</span> Choose
                from our wide range of high-quality mattresses from popular
                brands like Royal Foam, Latex Foam, Ashfoam, and other foreign
                brands.
              </p>
            </div>
            <div className="flex gap-4">
              <CloudUpload size={36} color="#0056B3" />
              <p className="leading-8">
                <span className="font-semibold">Restoration Services</span> Give
                your old mattress a new life with our professional restoration
                services, ensuring comfort and durability.
              </p>
            </div>
            <div className="flex gap-4">
              <UserRoundCog size={36} color="#0056B3" />
              <p className="leading-8">
                <span className="font-semibold"> Customer Support</span> We are
                here to solve your sleep needs. Give us a call or chat with us
                for personalized recommendations and assistance.
              </p>
            </div>
          </span>
          <div className="flex gap-6 items-center">
            <div className="p-2 px-4 rounded-lg bg-[#007BFF] text-[#fafafa] cursor-pointer hover:bg-opacity-80 transition duration-500">
              <Link to={"/contact"}>Contact Us</Link>
            </div>
            <Link to={"/about"}>
              <div className="flex gap-2 items-center cursor-pointer">
                <span>Learn More</span>
                <MoveRight size={16} />
              </div>
            </Link>
          </div>
        </div>
        <img
          src="/images/mattressStaff.png"
          alt="Staff Image"
          className="object-contain w-1/2 rounded-2xl"
        />
      </div>
      <Footer />
    </div>
  );
};

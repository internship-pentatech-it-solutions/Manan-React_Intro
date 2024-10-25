import React from "react";
import { Link } from "react-router-dom";

export const Brandcard = ({ brand }) => {
  console.log(brand);
  console.log("Brandcard");
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-md w-full h-96 lg:h-64 border border-[#e2e2e2] bg-[#fafafa] border-opacity-40">
      <div
        style={{
          backgroundImage: `url(${brand.imageUrl})`,
        }}
        className="bg-cover lg:w-1/2 w-full h-full bg-center"
      >
        {/* <img
          src="../../public/images/brand_images/ashfoam.jpg"
          className="lg:object-contain md:object-cover w-1/2 md:w-full md:h-1/3"
        /> */}
      </div>
      <div className="flex flex-col justify-between lg:p-8 p-6 gap-16 md:gap-8 sm:gap-4 w-full lg:w-1/2 border-[#000000]">
        <div className="flex flex-col">
          <h1 className="font-bold">{brand.name}</h1>
          <p>{brand.description}</p>
        </div>
        <Link to={brand.url}>
          <button className="border border-[#e2e2e2] px-4 py-2 rounded-lg hover:bg-[#e2e2e2] transition duration-300">
            Explore Brand
          </button>
        </Link>
      </div>
    </div>
  );
};

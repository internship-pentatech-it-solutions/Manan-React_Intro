import React from "react";

const Product = () => {
  return (
    <div className="w-full h-fit border-1 border-[#e2e2e2] shadow-md rounded-lg overflow-hidden">
      <div className="h-[81%] w-full">
        <img
          src="../../public/images/test_prod.avif"
          className="object-cover h-[15rem] w-full"
        />
      </div>
      <div className="flex flex-col justify-between font-semibold text-md p-2 gap-4">
        <p className="text-left px-4">
          Polyester Covered 10inch High Density Foam Mattess
        </p>
        <hr />
        <div className="flex justify-between items-center px-4">
          <p className="text-lg">GH₵ 3341.00</p>
          <button className="border border-[#e2e2e2] p-1 px-4 rounded-lg hover:bg-[#e2e2e2] transition duration-300">
            Buy Me
          </button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProducts = () => {
  return (
    <div className="bg-white w-full rounded-2xl shadow-md p-12 flex flex-col">
      <div className="flex flex-col items-center gap-4 mb-12">
        <h1 className="font-semibold text-3xl">Our Featured Products</h1>
        <p className="w-1/3 leading-7 text-center">
          Take a look at our trending products. Browse through and see what
          other people are buying
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

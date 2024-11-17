import React, { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";

const Product = ({ product }) => {
  // console.log(product);
  // console.log(product.name);

  const imageUrl =
    import.meta.env.VITE_APP_API_URL + "/" + product.pictures[0].image_path;

  return (
    <div className="w-full flex flex-col justify-between lg:min-w-[100%] h-full border-1 border-[#e2e2e2] shadow-sm rounded-lg overflow-hidden">
      <div className="h-[60%] w-full">
        <img src={imageUrl} className="object-cover h-[15rem] w-full" />
      </div>

      <div className="flex flex-col justify-between font-semibold text-md p-2 py-4 gap-4">
        <div className="lg:px-4 md:px-2 px-1 flex flex-col gap-2">
          <p className="text-left text-sm lg:text-lg">{product.name}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center lg:px-4 md:px-2 px-1">
          <p className="text-md text-[#0056B3]">
            GH₵ {product.prices[0].price}
          </p>
          <button className="border border-[#e2e2e2] p-1 px-4 rounded-lg hover:bg-[#e2e2e2] transition duration-300">
            Buy Me
          </button>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProducts = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/products/limit/8");
        console.log(response.data.products);
        setData(response.data.products);
      } catch (error) {
        // console.log(error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div className="w-full text-center">Loading...</div>;
  }
  if (error) {
    return <div className="w-full text-center">Error: {error}</div>;
  }

  return (
    <div className="bg-[#fafafa] w-full rounded-2xl shadow-md p-8 lg:p-12 flex flex-col">
      <div className="flex flex-col items-center justify-center gap-4 mb-12">
        <h1 className="font-semibold text-3xl text-center">
          Our Featured Products
        </h1>
        <p className="lg:w-1/3 md:w-2/3 leading-7 text-center">
          Take a look at our trending products. Browse through and see what
          other people are buying
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((products) => (
          <Product product={products} key={products.id} />
        ))}
      </div>
    </div>
  );
};

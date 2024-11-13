import React from "react";
import { Brandcard } from "./Brandcard";
import data from "../data/data";

// console.log(data);

export const Brands = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-12">
      {data.map((dataItem) => (
        <Brandcard key={dataItem.id} brand={dataItem} />
      ))}
    </div>
  );
};

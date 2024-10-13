import React from "react";
import { Navbar } from "../components/Navbar";

export const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-9xl flex items-center justify-center h-[80%]">
        About
      </h1>
    </div>
  );
};

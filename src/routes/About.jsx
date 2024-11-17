import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="flex items-center justify-center text-9xl h-[80%] text-center">
        About
      </h1>
      <Footer />
    </div>
  );
};

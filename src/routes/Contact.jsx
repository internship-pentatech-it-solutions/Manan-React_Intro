import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Contact = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <h1 className="text-9xl flex items-center justify-center h-[80%]">
        Contact
      </h1>
      <Footer />
    </div>
  );
};

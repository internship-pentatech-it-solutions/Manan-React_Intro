import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <img
        src="/images/helpdesk1"
        alt="Staff Image"
        className="object-contain w-2/5"
      />
      <Footer />
    </div>
  );
};

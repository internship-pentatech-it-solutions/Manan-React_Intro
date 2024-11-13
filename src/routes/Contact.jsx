import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center gap-10 bg-[#f2f2f2]">
      <Navbar />
      <main className="flex h-full w-[90%] bg-[#fafafa] rounded-2xl overflow-clip justify-center items-center">
        <div className="flex flex-col justify-between text-[#fafafa] h-screen w-1/2 bg-[url('/images/helpdesk1.png')] bg-cover p-10">
          {/* <img
            src="/images/helpdesk1.png"
            alt="Help Desk"
            className="h-full object-cover"
          /> */}
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <div className="">Some Info</div>
        </div>
        <div className="bg-[#fafafa] w-1/2">Form</div>
      </main>
      <Footer />
    </div>
  );
};

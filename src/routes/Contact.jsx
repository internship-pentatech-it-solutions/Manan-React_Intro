import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center gap-2 md:gap-8 bg-[#ffffff]">
      <Navbar />
      <main className="flex flex-col md:flex-col lg:flex-row h-full w-[95%] md:w-[90%] bg-[#fafafa] rounded-3xl overflow-clip justify-center">
        <div className="flex flex-col justify-between text-[#fafafa] lg:h-screen md:h-full md:bg-center bg-center lg:w-1/2 w-full bg-[url('/images/helpdesk1.png')] bg-cover p-6 md:p-10 lg:p-10">
          {/* <img
            src="/images/helpdesk1.png"
            alt="Help Desk"
            className="h-full object-cover"
          /> */}
          <h1 className="md:text-3xl lg:text-3xl text-2xl font-semibold mb-32 md:mb-24">
            Talk to Us
          </h1>
          <div className="flex flex-col bg-[#fafafa] p-4 md:p-6 rounded-3xl text-[#333333] lg:gap-6 md:gap-4 gap-2">
            <div className="flex gap-8 items-center">
              <Phone color="#4f46e5" />
              <p className="md:text-lg">+233 (0) 24 428 1122</p>
            </div>
            <div className="flex gap-8 items-center">
              <Mail color="#4f46e5" />
              <p className="md:text-lg">wconsult@yahoo.com</p>
            </div>
            <div className="flex gap-8 items-center">
              <Phone color="#4f46e5" />
              <p className="md:text-lg">Kumasi, Ghana</p>
            </div>
          </div>
        </div>
        <div className="bg-[#fffffff] lg:w-1/2 w-full p-6 md:p-10 flex flex-col justify-center lg:gap-16 md:gap-8 lg:h-screen h-full md:h-full">
          <p className="text-2xl md:text-3xl mb-6 md:mb-0 font-semibold">
            Send Us a Message
          </p>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 md:text-lg">
              <input
                className="py-4 px-4 rounded-3xl border focus:outline-none focus:border-2 focus:border-[#007BFF]  border-[#f2f2f2]"
                type="text"
                name=""
                id=""
                placeholder="Enter your name"
              />
              <input
                className="py-4 px-4 rounded-3xl border focus:outline-none focus:border-2 focus:border-[#007BFF]  border-[#f2f2f2]"
                type="email"
                name=""
                id=""
                placeholder="Enter your Email"
              />
              <input
                className="py-4 px-4 rounded-3xl border focus:outline-none focus:border-2 focus:border-[#007BFF]  border-[#f2f2f2]"
                type="text"
                name=""
                id=""
                placeholder="Your Phone Number"
              />
            </div>
            <div className="text-[#333333] flex flex-col gap-4 md:text-lg">
              <p>How do you preferred we reached out?</p>
              <span className="flex gap-8 items-center">
                <span className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="email"
                    name="comms"
                    value="Email"
                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="email">Email</label>
                </span>
                <span className="flex gap-2 items-center">
                  <input
                    type="radio"
                    id="phone"
                    name="comms"
                    value="Phone"
                    className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 checked:bg-blue-500 checked:border-transparent"
                  />
                  <label htmlFor="phone">Phone</label>
                </span>
              </span>
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message here"
              className="outline-none h-[10rem] p-4 md:text-lg rounded-xl resize-none border border-[#f2f2f2] focus:border-2 focus:border-[#007BFF]"
            ></textarea>
            <input
              type="button"
              value="Submit"
              className="py-3 px-4 rounded-3xl cursor-pointer bg-[#007BFF] text-white md:text-xl hover:bg-opacity-90 transition duration-500"
            />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

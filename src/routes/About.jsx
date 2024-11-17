import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex p-8 gap-12 md:p-16 md:gap-16 justify-center items-center">
        <img
          src="/images/helpdesk1.png"
          alt="Staff Image"
          className="object-contain w-2/5 rounded-2xl hidden lg:flex"
        />
        <div className="flex flex-col gap-5 leading-7 md:leading-6 w-full lg:w-2/4 md:text-lg">
          <h1 className="font-semibold text-2xl md:text-3xl text-center">
            About Mattress Home
          </h1>
          <p>
            Welcome to Mattress Home, your ultimate sleep partner and solution.
            We specialize in providing high-quality new mattresses and offer
            expert restoration services for your old ones. Our mission is to
            ensure you get the best sleep possible, tailored to your unique
            needs.
          </p>
          <p>
            At Mattress Home, we understand that a good night's sleep is
            essential for a healthy and productive life. That’s why we offer a
            diverse range of mattresses from top brands such as Royal Foam,
            Latex Foam, Ashfoam, and various foreign brands. Whether you're
            looking for a new mattress or need to rejuvenate your existing one,
            we've got you covered.
          </p>
          <p>
            We are here to solve your sleep needs. Give us a call or chat with
            us today to find the perfect mattress that suits you. Experience the
            difference with Mattress Home, where your comfort and satisfaction
            are our top priorities.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

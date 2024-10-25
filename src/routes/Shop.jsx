import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Shop = () => {
  const nextFox = () => {
    fetch("https://randomfox.ca/floof")
      .then((responce) => responce.json())
      .then((data) => setFox(data.image));
  };

  const [fox, setFox] = useState("");
  useEffect(() => nextFox(), []);

  return (
    <div>
      <Navbar />
      <h1 className="text-6xl flex items-center justify-center h-full p-6">
        Fox Image Generator
      </h1>
      <div className="flex flex-col w-full items-center justify-center gap-y-4 p-6">
        <div className="h-96 w-auto rounded-lg flex items-center justify-center overflow-hidden">
          <img src={fox} alt="Image of Fox" className="h-full object-cover" />
        </div>
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          onClick={nextFox}
        >
          Next Fox
        </button>
      </div>
      <Footer />
    </div>
  );
};

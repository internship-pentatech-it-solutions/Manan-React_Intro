import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Brands } from "./components/Brands";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      {/* <CarouselComponent /> */}
      <main className="lg:p-16 md:p-10 p-6 bg-[#f2f2f2]">
        <Brands />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Brands } from "./components/Brands";
import { FeaturedProducts } from "./components/FeaturedProducts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      {/* <CarouselComponent /> */}
      <main className="lg:p-16 md:p-10 p-6 bg-[#f2f2f2]">
        <Brands />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

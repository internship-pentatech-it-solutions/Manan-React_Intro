import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <p className="h-96">Body</p>
      <Footer />
    </div>
  );
}

export default App;

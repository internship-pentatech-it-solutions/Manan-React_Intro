import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
        <h1 className="text-6xl flex items-center justify-center h-full p-4 pb-8">
          Counter
        </h1>
        <div className="flex flex-col items-center">
          <div className="text-4xl border-2 border-blue-600 rounded-lg p-6 m-6">
            {count}
          </div>
          <span className="flex gap-6">
            <button
              className="px-4 py-2 bg-green-600 rounded-lg text-white"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increase Count
            </button>
            <button
              className="px-4 py-2 bg-red-600 rounded-lg text-white"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Decrease Count
            </button>
            <button
              className="px-4 py-2 bg-blue-600 rounded-lg text-white"
              onClick={() => {
                setCount(0);
              }}
            >
              Reset Count
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;

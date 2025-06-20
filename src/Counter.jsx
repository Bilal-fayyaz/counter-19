import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  return (
    <>
      <div className="container text-center ">
        <h1 className="text-9xl">{count}</h1>
        <button
          onClick={() => setcount(count - 1)}
          className="px5 mx-2 py-2 bg-red-500 text-white rounded-md active:scale-95 cursor-pointer hover:bg-red-700"
        >
          Decrease
        </button>

        <button
          onClick={() => setcount(0)}
          className="px5 mx-2 py-2 bg-green-500 text-white rounded-md active:scale-95 cursor-pointer hover:bg-green-700"
        >
          Reset
        </button>

        <button
          onClick={() => setcount(count + 1)}
          className="px5 mx-2 py-2 bg-blue-500 text-white rounded-md active:scale-95 cursor-pointer hover:bg-blue-700"
        >
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;

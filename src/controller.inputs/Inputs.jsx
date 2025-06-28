import React, { useState } from "react";
import toast from "react-hot-toast";
import SingleName from "./SingleName";

const Inputs = () => {
  const [text, setText] = useState("");
  const [taskid, settaskid] = useState(null);
  const [myData, setMyData] = useState([]);

  const [error, setError] = useState(false);

  const handleData = () => {
    if (text == "") {
      setError(true);
      toast.error("please enter a value");
    } else {
      toast.success("value added");
      setError(false);

      setMyData([
        ...myData,
        {
          text: text,
          jjjj: Date.now(),
        },
      ]);

      console.log(text);
    }
    setText("");
  };

  const remove = (id) => {
    const updated = myData.filter((i) => i.jjjj !== taskid);

    setMyData(updated);
  };
  console.log(Date.now());

  return (
    <>
      <div
        className="w-[]90% md:w-[70%] lg:w-[60%] xl:w-[45%] shadow-lg 
    p-10 rounded-md mx-auto"
      >
        <form>
          <lable className="text-gray-500">Emale.</lable>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md ${
              error && "border-red-600"
            } `}
          />
          {error && (
            <p className="text-red-600" fw-semibold>
              please Enter Emale
            </p>
          )}
          <button
            onClick={handleData}
            type="button"
            className="w-full p-2 bg-gray-500 text-white mt-3 active:scale-95 shadow rounded-md"
          >
            Add Email
          </button>
        </form>
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-3">
        {" "}
        {myData.map((item, index) => {
          return (
            <SingleName
              {...item}
              key={index}
              settaskid={settaskid}
              onremove={remove}
            />
          );
        })}
      </div>
    </>
  );
};

export default Inputs;

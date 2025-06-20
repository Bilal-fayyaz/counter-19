import React from "react";
import "./style.css";
const Mobile = () => {
  return (
    <>
      <div
        className="container p-10 rounded-md mt-6 shadow-lg mx-auto w-[90%]
      xl:w-[30%] lg:w-[50%] md:w-[60%] bg-gray-300"
      >
        <div className="card bg-white rounded-md ">
          <div className="bg-green-500  text-gray-300  flex">
            <img
              className="msg"
              src="https://icons.veryicon.com/png/o/miscellaneous/personal-image/leaving-a-message-14.png"
              alt=""
            />
            <div>
              <h1>Start a Conversation</h1>
              <p>Hi! Click one of our member below to chat on Whatsapp.</p>
            </div>
          </div>
          <p className="text-gray-300">
            The team typically replies in a few minutes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mobile;

import React from "react";

const Multipalinputs = () => {
  return (
    <>
      <div
        className="w-[]90% md:w-[70%] lg:w-[60%] xl:w-[45%] shadow-lg 
    p-10 rounded-md mx-auto"
      >
        <form>
          <lable className="text-gray-500">NAME</lable>
          <input
            name="name"
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">FULL NAME</lable>
          <input
            name="name"
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">ROLL NUMBER</lable>
          <input
            name="name"
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">AGE</lable>
          <input
            name="name"
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">DOB</lable>
          <input
            name="name"
            type="DATE"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">EMAIL</lable>
          <input
            name="name"
            type="EMAIL"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">PHONE NUMBER</lable>
          <input
            name="name"
            type="NUMBER"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">ADREES</lable>
          <input
            name="name"
            type="phone number"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">class</lable>
          <input
            name="name"
            type="class"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">ETC</lable>
          <input
            name="name"
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />
          <lable className="text-gray-500">ETC</lable>
          <input
            name="name"
            type="text"
            placeholder="Enter your Email....."
            className={`w-full p-4 shadow focus:border-blue-500 outline-0    border border-gray-300 rounded-md 
              
            } `}
          />

          <button
            type="button"
            className="w-full p-2 bg-gray-500 text-white mt-3 active:scale-95 shadow rounded-md"
          >
            Add Email
          </button>
        </form>
      </div>
    </>
  );
};

export default Multipalinputs;

import React from "react";

const SingleName = ({ text, jjjj, settaskid, onremove }) => {
    settaskid(jjjj)
  return (
    <div className="p-5  shadow shadow-gray-500">
      <p>{text}</p>

      <button onClick={()=>onremove(jjjj)} className="text-black px-3 py-2 rounded-md border-2 border-gray-500">delete</button>
    </div>
  );
};

export default SingleName;
import React from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white flex flex-col justify-center items-center h-screen font-mono  ">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-3xl mb-6">Page Not Found</p>
      <button
        onClick={() => navigate("/")}
        className="border-2 py-1 px-4 rounded-md bg-[#0abcf9] border-transparent shadow-lg w-[100px] shadow-[#0abcf99e] "
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;

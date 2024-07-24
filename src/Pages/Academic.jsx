import React, { useState } from "react";
import Banner from "../Components/Banner";
import EarlyData from "../Components/EarlyData";
import FoundationData from "../Components/FoundationData";
import Groth from "../Components/Groth";
const Academic = () => {
  const [change, setchange] = useState("early");

  return (
    <div>
      <div className="bg-gray-100">
        <div> 
        <Banner title="Academic" />
        <div className=" w-full  sm:w-11/12 sm:mx-auto sm:grid-cols-3 sm:mt-10  border-r-blue-900 px-3 sm:px-0 grid grid-cols-1 p-10  ">
          <button
            onClick={() => setchange("early")}
            className={`border border-primary sm:py-2 sm:text-xl ${
              change === "early" ? "bg-primary text-white " : "text-primary"
            }`}
          >
            EARLY YEARS PROGRAMME
          </button>
          <button
            onClick={() => setchange("foundation")}
            className={`border border-primary sm:py-2  sm:text-xl ${
              change === "foundation"
                ? "bg-primary text-white "
                : "text-primary"
            }`}
          >
            {" "}
            THE FOUNDATION YEARS PROGRAMMME{" "}
          </button>
          <button
            onClick={() => setchange("groth")}
            className={`border border-primary sm:py-2  sm:text-xl ${
              change === "groth"
                ? "bg-primary text-white "
                : "text-primary"
            }`}
          >
            {" "}
            THE FOUNDATION YEARS PROGRAMMME{" "}
          </button>

 
        </div>
      </div>
      <div className=" w-full sm:w-11/12 mx-auto px-3 sm:px-0">
        {change === "early" && <EarlyData />}
        {change === "foundation" && <FoundationData />}
        {change ==="groth" && <Groth/>}
      </div>
    </div>
    </div>
  );
};

export default Academic;

import React from "react";

const Form1 = () => {
  return (
    <>
      <div className="sm:p-10 p-3 sm:ml-96 sm:mr-96">
        <div className="bg-blue-900 py-15 rounded-md text-[#e5e7eb] text-sm sm:text-base font-semibold">
          <div className="flex justify-center text-center  sm:w-[]700px] sm:px-3 ">
            <form action="">
              <h1 className="font-bold  text-start sm:text-3xl text-xl text-primary">
                Please fill the Form below to Place Admission Enquiry
              </h1>

              <div className="sm:w-90  sm:my-4  ">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Name Of Student"
                />
              </div>
                                    
              <div className="sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Adimission Required For Which Grade?"
                />
              </div>

              <div className="sm:w-80  sm:my-4">
                <input
                  className="sm:sm:w-[480px] w-full text-start h-12  bg-primary border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Prent Name"
                />
              </div>

              <div className="sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-primary  border-b-2 font-bold sm:text-xl"
                  type="text"
                  placeholder="Contact Number"
                />
              </div>

              <div className=" sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full text-start h-12  bg-primary border-b-2 font-bold sm:text-xl"
                  type="email"
                  placeholder="Email ID"
                />
              </div>

              <div className="sm:w-80 sm:my-4">
                <input
                  className="sm:w-[480px] w-full  text-start h-12  bg-primary border-b-2  font-bold sm:text-xl"
                  type="text"
                  placeholder="Residential Address"
                />
              </div>

              <div className="p-4 my-2 text-center">
              <button
                type="submit"
                className="px-6 py-1 border-2 rounded-full text-white hover:bg-white hover:text-black bg-red-600"
              >
                Submit
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;

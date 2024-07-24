import React from "react";
import Slider from "../Components/Slider";
import Homepagework from "../Components/Homepagework";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="grid grid-cols-1 h-auto w-full  p-2  sm:grid-cols-3  sm:flex sm:w-full sm:p-14 hover:cursor-pointer ">
      
          
        <div className="sm:w-[300px]  sm:p-10 p-12">
          <Homepagework />
        </div>
          <div className=" sm:pt-2  text-center w-auto sm:gap-4 sm:p-16  sm:text-center  ">
            <h1 className=" text-center  font-bold text-xl text-secondary  sm:text-3xl sm:border-b-2 border-primary ">
              Welcome to <br /> Bhondawe Patil Public School
            </h1>

            <p className="text-primary text-xs font-mono sm:text-xl sm:pt-12 ">
              Welcome to the abode of intellect where the purpose of education
              is to equip the child with the most excellent technological
              proficiency; to empower him with the skills in order to realize
              his God gifted potential; to creole the light climate so that the
              child may develop fully as a complete human being at BHONDAWE
              PATIL PUBLIC SCHOOL, one's intellect is I transformed into an
              illuminated reflection of knowledge and broad outlook towards
              life.
            </p>
          </div>
        
        <div className=" sm:w-[300px] sm:p-10 p-12">
          <Homepagework />
        </div>
      </div>
    </div>
  );
};

export default Home;

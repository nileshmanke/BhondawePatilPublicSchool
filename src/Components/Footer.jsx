import React from "react";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import Footerimg from "./Footerimg";

const navData = [
  { title: "Home", linkTo: "/" },
  { title: "About", linkTo: "about" },
  { title: "Admission", linkTo: "admission" },
  {
    title: "Mandatory Public Disclosure",
    linkTo: "mandatory-public-Disclosure",
  },
  { title: "Academic", linkTo: "academic" },
  { title: "Achievement", linkTo: "achievement" },
  { title: "Infrastructure", linkTo: "infrastructure" },
  { title: "Gallery", linkTo: "gallery" },
  { title: "Contact Us", linkTo: "contact us" },
];
const Footer = () => {
  return (
    <div className=" justify-around sm:h-1/5 grid ">
      <div className=" grid grid-cols-1 text-center  sm:grid-cols-3 justify-between ">
        <div className="sm:px-20">
          <h2 className="text-secondary text-3xl font-bold  sm:pt-10 py-4">
            School Address{" "}
          </h2>
          <h3 className=" text-lg font-bold text-primary leading-5.80">
            Bhondawe Patil Public School
          </h3>
          <p className="text-primary justify-center leading-6.80  p-4 ">
            Gut No. 49, Bajaj Nagar,MIDC
            <p>Waluj, Aurangabad – 43113.(MH) </p>
            Contact: 6232616161/ 6232717171 Email: bhondawepatilschool@gmail.com
          </p>
        </div>


        <div className="px-20">
          <h2 className="text-secondary text-3xl font-bold sm:pt-10 py-4 "> {" "}
     Quick Links
          </h2>
          <div className="flex flex-col gap-3">
            <ul className="hover:text-red-700 ">
              {navData.map((item, i) => (
                <Link to={item.linkTo} key={i}>
                  <li className="text-primary hover:text-red-700 ">
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>



        <div className="px-20">
          <h2 className="text-secondary text-3xl font-bold sm:pt-10 py-2">
            {" "}
            Follow Us on
          </h2>
          <div className="footerimg sm:text-center">
            <Footerimg/>
          </div>             
          </div>
          <div>
        </div>
      </div>
      <p className=" bg-red-700 text-stone-50 text-center pt-1">All Rights Reserved With Bhondawe Patil Public School</p>     
    </div>
  );
};

export default Footer;

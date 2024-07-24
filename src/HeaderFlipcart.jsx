import React, { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaCartArrowDown } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaStore } from "react-icons/fa6";
import { CgChevronDown } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";




function HeaderFlipcart() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="shadow-lg">
      <div className=" w-full text-center h-20  gap-10 border-2  flex justify-between py-5">
        <div className=" flex justify-between mr-24">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg  "
            alt=""
          />
          <div className=" flex "> 
          <button className="flex justify-evenly">
          <FaSearch />
          <input 
            className="bg-white py-2 ml-32 rounded-lg roejustify-evenlyl border-2 h-10 w-[400px] text-black"
            type="text"
            placeholder="Search For products,brand and more"
          />
          </button>
          </div>
        </div>

        <div className=" flex justify-between">
          <button
            className="w-24 h-11 rounded-2xl ml-4bg-white border-2 border-blue-300"
          >
            <div className="flex justify-evenly py-2 px-2">
            <VscAccount />
              <h2 className="ml-2">Login</h2>
              <CgChevronDown />

            </div>
          </button>
        </div>
        <div className="flex justify-between ">
        <FaCartArrowDown />
          <h2 className="ml-2">Cart</h2>
        </div>
        <div className="flex justify-between">
        <FaStore />
          <h4 className="ml-2">Become a Seller</h4>
      
        </div>
        <div>
        <BiDotsVerticalRounded />
        </div>
      </div>

      {/* seconddiv start */}

      <div className=" mx-auto h-32 px-28 py-4  mb-4 ml-3 mr-3 flex justify-evenly">
        <div className="">
          <img src=" public/images/Flipcartimg1.webp" alt="" />
          <h1>Grocery</h1>
        </div>
        <div className="">
          <img src="public/images/Flicartimg2.webp " alt="" />
          <h1>Mobiles</h1>
        </div>

        <div className="Main">
          <img src="public/images/Flipcatrimg3.webp" alt="" />

          <button onClick={handleDropdown}>
            <h2 className="">
              Fashion <i className="ml-4 fa-solid fa-caret-down"></i>
            </h2>
          </button>

          {showDropdown && (
            <div className="absolute z-10 mt-2 w-56  bg-white border rounded-md shadow-lg">
              <div className="subDiv1 ">
                <a
                  href="#"
                  className=" hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
                >
                  Men,s Top were
                </a>
              </div>

              <div className="subProduct">
                <div className="absolute z-10 mt-2 w-56  bg-white border rounded-md shadow-lg">
                  <div>
                    <a
                      href="#"
                      className=" hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
                    >
                      product 1
                    </a>
                  </div>
                  <a
                    href="#"
                    className="hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
                  >
                    product 2
                  </a>
                </div>
              </div>

              <a
                href="#"
                className="hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
              >
                Subcategory 2
              </a>
              <a
                href="#"
                className="hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
              >
                Subcategory 1
              </a>
              <a
                href="#"
                className="hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
              >
                Subcategory 2
              </a>
              <a
                href="#"
                className="hover:bg-slate-200 hover:text-black hover:font-bold block px-4 py-2 text-sm text-gray-700"
              >
                Subcategory 1
              </a>
            </div>
          )}
        </div>

        

        <div className="">
          <img src=" public/images/Fimg4.webp" alt="" />
          <h1>
            Eletronics <i className="ml-4 fa-solid fa-caret-down"></i>
          </h1>
        </div>
        <div className="">
          <img src=" public/images/Fimg5.webp" alt="" />
          <h1>
            Home & Furniture<i className="ml-4 fa-solid fa-caret-down"></i>
          </h1>
        </div>
        <div className="">
          <img src="  public/images/FimgAppilication.webp" alt="" />
          <h1>Appliances</h1>
        </div>
        <div className="">
          <img src=" public/images/Fimg6.webp" alt="" />
          <h1>Travel</h1>
        </div>
        <div className="">
          <img src=" public/images/Fimg7.webp" alt="" />
          <h1>
            Beauty, Toys & More<i className="ml-4 fa-solid fa-caret-down"></i>{" "}
          </h1>
        </div>
        <div className="">
          <img src=" public/images/Fimg9.webp " alt="" />
          <h1>
            Two Wheelers<i className="ml-4 fa-solid fa-caret-down"></i>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderFlipcart;

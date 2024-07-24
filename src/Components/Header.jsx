import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const navData=[
  {title:"Home", linkTo:"/",},
  {title:"About", linkTo:"about",},
  {title:"Admission", linkTo:"admission",},
  {title:"Mandatory Public Disclosure", linkTo:"mandatory-public-Disclosure",},
  {title:"Academic", linkTo:"academic",},
  {title:"Achievement", linkTo:"achievement",},
  {title:"Infrastructure", linkTo:"infrastructure",}, 
  {title:"Gallery", linkTo:"gallery",},
  {title:"Contact Us", linkTo:"contact us",}
]

const Header = () => {
  const[open, setopen]=useState(false);

  return (
    <div>
        <div className="bg-red-700 text-white" >
            <div className="w-full sm:w-11/12 mx-auto px-3 h-[26px] sm:px-0 flex justify-between ">
                <p>bhondaepatilschool@gmail.com</p>
                <p>facebook</p>
            </div>
            </div>

            <div className="w-full  px-3 sm:px-0 sm:w-11/12 sm:ml-10 py-1 flex justify-between items-center ">
                <img src="./images/big-logo.jpg " className=" sm:h-auto h-10" alt="auto"/>
                <div onClick={()=>setopen(!open)} className="block sm:hidden text-primary text-lg">
                  {open?<CgClose />: <FaBars />}
                </div>
            </div>
     <div className="bg-blue-900 text-white">

     <nav className="w-11/12 mx-auto">
      <ul className={`flex flex-col sm:flex-row gap-6 py-2 ${open? "block":"hidden sm:flex"} `}>
        {navData.map((item,i)=>(
          <Link to={item.linkTo} key={i}>
            <li onClick={()=>setopen(!open)}>{item.title}</li>
          </Link>
        ))}

      </ul>
    </nav>
    </div>
    </div>
  )
}

export default Header
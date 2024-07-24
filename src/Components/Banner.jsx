import React from 'react'

const Banner = ({title}) => {
  return (
    <div className="bg-[url('./images/bagimgmain.jpg')]  py-20 ">
    <h2 className=" text-black font-serif  text-center font-bold text-4xl">{title}</h2>
    </div>
  )
}

export default Banner
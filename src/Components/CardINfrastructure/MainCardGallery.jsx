// App.js

import React from "react";
import CardGallery from "./CardGallery";

const cardData = [
  {
    imageUrl: "public/images/Gallaryimg/img1.webp",
  },
  {
    imageUrl: "public/images/Gallaryimg/img2.webp ",
  },
  {
    imageUrl: "public/images/Gallaryimg/img3.webp ",
  },
  {
    imageUrl: " public/images/Gallaryimg/img4.webp",
  },
  {
    imageUrl: " public/images/Gallaryimg/img5.webp ",
  },
  {
    imageUrl: "public/images/Gallaryimg/img6.webp ",
  },
  {
    imageUrl: "public/images/Gallaryimg/img7.webp ",
  },
  {
    imageUrl: " public/images/Gallaryimg/img8.webp",
  },
  {
    imageUrl: "public/images/Gallaryimg/img9.webp ",
  },
  {
     imageUrl: "public/images/Gallaryimg/img10.webp ",
  },
  {
    imageUrl: " public/images/Gallaryimg/img11.webp",
  },
  {
    imageUrl: "public/images/Gallaryimg/img12.webp ",
  },
  // Add more card data as needed
];

const MainCardGallery = () => {
  return (
    <div className=" sm:grid grid-cols-3">
      {cardData.map((card, index) => (
        <CardGallery key={index} {...card} />
      ))}
    </div>
  );
};

export default MainCardGallery;

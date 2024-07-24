// Card.js

import React from "react";

const CardGallery = ({ imageUrl }) => {
  return (
    <div className="p-3 ">
      <img className="w-full  rounded-ee-3xl  border-primary border-y-2 hover:border-yellow-400 " src={imageUrl} alt="Card" />

      </div>
    
  );
};

export default CardGallery;

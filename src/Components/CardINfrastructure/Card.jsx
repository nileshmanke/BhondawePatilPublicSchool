// Card.js

import React from "react";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="p-3">
      <img className="w-full rounded-3xl" src={imageUrl} alt="Card" />
      <div className="FirstInfrastructure">
        <div className="flex justify-center font-mono font-bold text-secondary  text-2xl ">
          {title}
        </div>
        <div className="SeconsInfrasturcture">
          <p className="font-mono text-x p-2 font-bold text-primary ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
const serviceID = " service_zi7vqge";
    const templateID = "template_mw21uxk ";
    const userID = "TCT0ia-ADGvbTjgvD ";

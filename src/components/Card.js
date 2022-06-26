import React from "react";

const Card = (props) => {
  return (
    <div className="w-full border border-gray-400 rounded-md p-4 md:flex justify-between">
      <div className="flex items-start space-x-4">
        <img className=" h-24 w-30" alt="" src={props.image} />
        <div className=" text-start">
          <h2 className=" text-2xl font-semibold">{props.title}</h2>
          khh
        </div>
      </div>
      <div className="flex space-x-4 items-center">
        <div>
          <div>
            <p className="text-sm font-semibold">{props.company}</p>
            <p className="text-sm text-gray-400">{props.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl">
            ${props.cost} <spam className="text-sm">Aud</spam>
          </h2>
          <h2 className="text-sm text-gray-400">+ {props.shippingCharge} shipping</h2>
        </div>
        <div className=" space-y-3">
          <div>
            <button className="outline-none border border-gray-400 rounded-md p-2 font-semibold">
              Add To Cart
            </button>
          </div>
          <div>
            <button className="outline-none border border-gray-400 rounded-md p-2 font-semibold">
              Make Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

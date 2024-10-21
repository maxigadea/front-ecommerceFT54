import { IProduct } from "@/types";
import React from "react";

const Card: React.FC<IProduct> = ({ image, name, price }) => {
  return (
    <div className="group my-10 flex w-full max-w-[260px] max-h-[360px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src={image}
          alt="product image"
        />
      
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          10% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
       
          <h5 className="text-xl tracking-tight text-slate-900">
           {name}
          </h5>
        
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
            <span className="text-sm text-slate-900 line-through">${price + 50}</span>
          </p>
        </div>
        <span
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          See more
        </span>
      </div>
    </div>
  );
};

export default Card;

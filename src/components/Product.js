import { StarIcon } from "@heroicons/react/solid";
import Image from 'next/image';
import React, { useState } from 'react';
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,title,description,image,price,category}) {
  const [rating] = useState(
    Math.floor(Math.random()*(MAX_RATING - MIN_RATING +1)) + MIN_RATING
  );

  const [freeDelivery] = useState(Math.random() < 0.5)

  return(
   <div className="relative flex flex-col m-6 bg-white z-30 p-10">
    <p className="absolute top-3 right-2 text-xs italic text-gray-400">{category}</p>
    <div className="flex justify-center">
    <Image src ={image} height ={150} width = {150} objectFit = "contain"/>
    </div>
    <h4 className="my-3">{title}</h4>

    <div className ="flex">
      {Array(rating)
      .fill().map(
        (_,i) => (
          <StarIcon className = "h-5"/> 
        ))}

    </div>

    <p className="text-xs mt-2 my-5 line-clamp-2">{description}</p>
      <div className="flex items-center space-x-2 -mt-5">
        <Currency quantity={price} currency = "USD"/>
      </div>
      <div>
      {freeDelivery && <p className="text-xs text-black-500"> HAS FREE DELIVERY !!!! </p>}
      </div>
      <button className="mt-auto button">Add to Cart</button>
  </div>
  );
}

export default Product
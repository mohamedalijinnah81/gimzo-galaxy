import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const ProductInfo = ({ name, rating, users, pricing, originalPrice }) => {
  return (
    <div className='productinfo'>
        <h2>{name}</h2>
        <div className="productinforating">
            <FaStar className='productstar' />
            <p className='productrating'>{rating}</p>
            <p className='productusers'>{'(' + users + ')'}</p>
        </div>
        <div className="productprice">
            <p className='productofferprice'>{pricing}</p>
            <p className='productoriginalprice'>{originalPrice}</p>
        </div>
        <button className='addtocart-btn'>
            <FaCartPlus className='cartplus' />
            Add to cart
        </button>
    </div>
  )
}

export default ProductInfo
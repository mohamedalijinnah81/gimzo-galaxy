import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Item = ({ item, src }) => {
  return (
    <li className='item'>
        <Link to={`/product/${item.asin}`} className='productlinks'>
            <img src={item.image} alt="" />
            <h2>{((item.name).length >= 30) ? (item.name).slice(0, 30) + '...' : item.name}</h2>
            <div className="rating">
                <FaStar className='star' />
                <p>{item.stars}</p>
            </div>
            <p className='price'>{item.price_string} </p>
        </Link>
    </li>
  )
}

export default Item
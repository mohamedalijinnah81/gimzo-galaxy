import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../style/searchresult/Searchresult.css'

const Listitem = ({ item }) => {
  return (
      <li>
        <Link to={`/gimzo-galaxy/product/${item.asin}`} className='productlinks2'>
          <img src={item.image} alt="" />
          <div className="spec">
            <h2>{item.name}</h2>
            <div className="rating2">
              <FaStar className='star2' />
              <p>{item.stars}</p>
              <p id='users'>{ '(' + item.total_reviews + ')'}</p>
            </div>
            <p className='price2'>{item.price_string}</p>
          </div>
        </Link>
      </li>
  )
}

export default Listitem
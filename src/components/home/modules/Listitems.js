import React from 'react'
import Item from './Item'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Listitems = ({items}) => {
    const firstTwelveItems = items && items.slice(0, 6);
    // console.log(items);
  return (
    <div className="viewitems">
    {/* <button className='itemscroll item-prev'>
      <FaChevronLeft />
    </button> */}
      <ul>
        {firstTwelveItems && firstTwelveItems.map((item) => (
            <Item 
                item={item}
                key={item.asin}
                src={item.image}
                originalPrice={item.original_price}
            />
        ))}
    </ul>
        {/* <button className='itemscroll item-next'>
          <FaChevronRight />
        </button> */}
    </div>
  )
}

export default Listitems
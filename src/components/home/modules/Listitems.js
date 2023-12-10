import React from 'react'
import Item from './Item'

const Listitems = ({items}) => {
    const firstTwelveItems = items.slice(0, 6);
    // console.log(items);
  return (
    <ul>
        {firstTwelveItems.map((item) => (
            <Item 
                item={item}
                key={item.asin}
                src={item.image}
                originalPrice={item.original_price}
            />
        ))}

    </ul>
  )
}

export default Listitems
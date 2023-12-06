import React from 'react'
import Item from './Item'

const Listitems = ({items}) => {
    const firstTwelveItems = items.slice(0, 12);
  return (
    <ul>
        {firstTwelveItems.map((item) => (
            <Item 
                item={item}
                key={item.asin}
                src={item.image}
            />
        ))}

    </ul>
  )
}

export default Listitems
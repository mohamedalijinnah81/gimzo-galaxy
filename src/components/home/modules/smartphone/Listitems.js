import React from 'react'
import Item from './Item'

const Listitems = ({items}) => {
  return (
    <ul>
        {items.map((item) => (
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
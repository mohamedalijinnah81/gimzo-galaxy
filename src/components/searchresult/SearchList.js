import React from 'react'
import Listitem from './Listitem'

const SearchList = ({ items }) => {
  return (
    <div className='searchlist'>
        <ul>
            {items.map((item) => (
                <Listitem 
                    item={item}
                    key={item.asin}
                />
            ))}
        </ul>
    </div>
  )
}

export default SearchList
import React from 'react'
import Listitem from './Listitem'

const SearchList = ({ searchedList }) => {
  return (
    <ul>
          {searchedList.map((item) => (
              <Listitem 
                  item={item}
                  key={item.asin}
              />
          ))}
    </ul>
      
  )
}

export default SearchList
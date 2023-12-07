import React from 'react'

const Searchresult = ({ searchItem }) => {
  return (
    <div className='searchresult'>
        <h2>Search results for {searchItem}</h2>
    </div>
  )
}

export default Searchresult
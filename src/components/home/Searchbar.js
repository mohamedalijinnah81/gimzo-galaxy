import React, { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import '../../style/home/Searchbar.css'


const Searchbar = ({ searchItem, setSearchItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className='searchbar' onSubmit={handleSubmit}>
      <input 
        type="text" 
        ref={inputRef}
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        placeholder='search our products'
        required
      />
      <button
        type='submit'
        onClick={() => inputRef.current.focus()}
      >
        <FaSearch 
          className='search-btn'
        />
      </button>
    </form>
  )
}

export default Searchbar
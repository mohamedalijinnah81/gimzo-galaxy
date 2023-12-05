import React from 'react'
import { FcElectronics } from "react-icons/fc";
import '../../style/home/Navbar.css'
import Searchbar from './Searchbar';
import { BiSolidOffer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';

const Navbar = ({ searchItem, setSearchItem, handleSubmit }) => {
  return (
    <nav>
      <ul>
        <li>
          <FcElectronics className='logo'/>
        </li>
        <li id='title'>
          <h2>GimzoGalaxy</h2>
        </li>
      </ul>
      <Searchbar 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        handleSubmit = {handleSubmit}
      />
      <ul id='options'>
        <li>
          <BiSolidOffer 
            className='nav-icon'
          />
          Offers
        </li>
        <li>
          <FaUser 
            className='nav-icon'
          />
          Account
        </li>
        <li>
          <FaShoppingCart 
            className='nav-icon'
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { FcElectronics } from "react-icons/fc";
import '../../../style/home/navbar/Navbar.css'
import Searchbar from './Searchbar.js';
import { BiSolidOffer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({ searchItem, setSearchItem, handleSubmit }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/gimzo-galaxy'} className='home'>
            <FcElectronics className='logo'/>
          </Link>
        </li>
        <li id='title'>
          <Link to={'/gimzo-galaxy'} className='home'>
            <h2>GimzoGalaxy</h2>
          </Link>
        </li>
      </ul>
      <Searchbar 
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
        handleSubmit = {handleSubmit}
      />
      <ul id='options'>
        {/* <li>
          <Link to={'/gimzo-galaxy/offers'} className='options'>
            <BiSolidOffer 
              className='nav-icon'
            />
            Offers
          </Link>
        </li> */}
        <li>
          <Link to={'/gimzo-galaxy/account'} className='options'>
            <FaUser 
              className='nav-icon'
            />
            Account
          </Link>
        </li>
        <li>
          <Link to={'/gimzo-galaxy/cart'} className='options'>
            <FaShoppingCart 
              className='nav-icon'
            />
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
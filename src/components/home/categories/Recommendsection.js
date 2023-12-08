import React from 'react'
import '../../../style/home/categories/Recommendsection.css'
import { Link } from 'react-router-dom'

const Recommendsection = () => {
  return (
    <div className='recommend'>
        <h2>Recommended</h2>
        <ul>
            <li><Link to={'/gimzo-galaxy/category/smartphones'} className='categories'>Smartphones</Link></li>
            <li><Link to={'/gimzo-galaxy/category/laptops'} className='categories'>Laptops</Link></li>
            <li><Link to={'/gimzo-galaxy/category/cameras'} className='categories'>Cameras</Link></li>
            <li><Link to={'/gimzo-galaxy/category/earphones'} className='categories'>Earphones</Link></li>
            <li><Link to={'/gimzo-galaxy/category/gadgets'} className='categories'>Gadgets</Link></li>
            <li><Link to={'/gimzo-galaxy/category/mobileaccessories'} className='categories'>Accessories</Link></li>
        </ul>
    </div>
  )
}

export default Recommendsection
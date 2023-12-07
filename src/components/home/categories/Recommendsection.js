import React from 'react'
import '../../../style/home/categories/Recommendsection.css'
import { Link } from 'react-router-dom'

const Recommendsection = () => {
  return (
    <div className='recommend'>
        <h2>Recommended</h2>
        <ul>
            <li><Link to={'/category/smartphones'} className='categories'>Smartphones</Link></li>
            <li><Link to={'/category/laptops'} className='categories'>Laptops</Link></li>
            <li><Link to={'/category/cameras'} className='categories'>Cameras</Link></li>
            <li><Link to={'/category/earphones'} className='categories'>Earphones</Link></li>
            <li><Link to={'/category/gadgets'} className='categories'>Gadgets</Link></li>
            <li><Link to={'/category/mobileaccessories'} className='categories'>Accessories</Link></li>
        </ul>
    </div>
  )
}

export default Recommendsection
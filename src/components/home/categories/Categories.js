import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Categories.css'

const Categories = () => {
  return (
    <div className='category'>
        <h2>Categories</h2>
        <ul>
            <li>
                <Link to={'/gimzo-galaxy/category/smartphones'} className='categories'>
                    Smartphones
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/speakers'} className='categories'>
                    Speakers
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/earbuds'} className='categories'>
                    TWS Earbuds
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/smartwatches'} className='categories'>
                    Smartwatches
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/laptops'} className='categories'>
                    Laptops
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/mobileaccessories'} className='categories'>
                    Accessories
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/neckbands'} className='categories'>
                Neckbands
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/smartwatches'} className='categories'>
                    Tablets
                </Link>
            </li>
            <li>
                <Link to={'/gimzo-galaxy/category/storagedevices'} className='categories'>
                    Storage Devices
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Categories
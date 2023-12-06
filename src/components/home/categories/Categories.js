import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Categories.css'

const Categories = () => {
  return (
    <div className='category'>
        <h2>Categories</h2>
        <ul>
            <li>
                <Link to={'/category/smartphones'} className='categories'>
                    Smartphones
                </Link>
            </li>
            <li>
                <Link to={'/category/speakers'} className='categories'>
                    Speakers
                </Link>
            </li>
            <li>
                <Link to={'/category/earbuds'} className='categories'>
                    TWS Earbuds
                </Link>
            </li>
            <li>
                <Link to={'/category/smartwatches'} className='categories'>
                    Smartwatches
                </Link>
            </li>
            <li>
                <Link to={'/category/laptops'} className='categories'>
                    Laptops
                </Link>
            </li>
            <li>
                <Link to={'/category/accessories'} className='categories'>
                    Accessories
                </Link>
            </li>
            <li>
                <Link to={'/category/neckbands'} className='categories'>
                Neckbands
                </Link>
            </li>
            <li>
                <Link to={'/category/smartwatches'} className='categories'>
                    Tablets
                </Link>
            </li>
            <li>
                <Link to={'/category/storagedevices'} className='categories'>
                    Storage Devices
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Categories
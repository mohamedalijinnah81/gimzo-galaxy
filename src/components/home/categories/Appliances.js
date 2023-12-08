import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Appliances.css'

const Appliances = () => {
  return (
    <div className='appliances'>
      <h2>Appliances</h2>
      <ul>
        <li>
          <Link to={'/gimzo-galaxy/category/television'} className='categories'>
            Televisions
          </Link>
        </li>
        <li>
          <Link to={'/gimzo-galaxy/category/refrigerator'} className='categories'>
            Refrigerators
          </Link>
        </li>
        <li>
          <Link to={'/gimzo-galaxy/category/washingmachine'} className='categories'>
            Washing Machines
          </Link>
        </li>
        <li>
          <Link to={'/gimzo-galaxy/category/waterpurifier'} className='categories'>
            Water Purifiers
          </Link>
        </li>
        <li>
          <Link to={'/gimzo-galaxy/category/microoven'} className='categories'>
            Micro Ovens
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Appliances
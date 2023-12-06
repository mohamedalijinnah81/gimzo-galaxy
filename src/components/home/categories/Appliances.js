import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Appliances.css'

const Appliances = () => {
  return (
    <div className='appliances'>
      <h2>Appliances</h2>
      <ul>
        <li>
          <Link to={'/category/television'} className='categories'>
            Televisions
          </Link>
        </li>
        <li>
          <Link to={'/category/refrigerator'} className='categories'>
            Refrigerators
          </Link>
        </li>
        <li>
          <Link to={'/category/washingmachine'} className='categories'>
            Washing Machines
          </Link>
        </li>
        <li>
          <Link to={'/category/waterpurifier'} className='categories'>
            Water Purifiers
          </Link>
        </li>
        <li>
          <Link to={'/category/microoven'} className='categories'>
            Micro Ovens
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Appliances
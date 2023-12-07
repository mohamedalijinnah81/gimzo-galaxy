import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Appliances.css'

const Desktopcomponents = () => {
  return (
    <div className='desktopcomponents'>
        <h2>PC Components</h2>
        <ul>
            <li>
            <Link to={'/category/desktopmotherboard'} className='categories'>
                Motherboard
            </Link>
            </li>
            <li>
            <Link to={'/category/desktopram'} className='categories'>
                Ram
            </Link>
            </li>
            <li>
            <Link to={'/category/ssd'} className='categories'>
                SSD
            </Link>
            </li>
            <li>
            <Link to={'/category/smps'} className='categories'>
                SMPS
            </Link>
            </li>
            <li>
            <Link to={'/category/desktopaccessories'} className='categories'>
               Accessories
            </Link>
            </li>
      </ul>
    </div>
  )
}

export default Desktopcomponents
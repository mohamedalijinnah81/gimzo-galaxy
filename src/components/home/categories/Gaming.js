import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Appliances.css'

const Gaming = () => {
  return (
    <div className='gaming'>
        <h2>Gaming</h2>
        <ul>
            <li>
            <Link to={'/gimzo-galaxy/category/playstation'} className='categories'>
                PlayStations
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/keyboard'} className='categories'>
                Keyboards
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/gamingchairs'} className='categories'>
                Chairs
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/mouse'} className='categories'>
                Mouse
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/xbox'} className='categories'>
                Xbox
            </Link>
            </li>
      </ul>
    </div>
  )
}

export default Gaming
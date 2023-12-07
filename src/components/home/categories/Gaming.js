import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Appliances.css'

const Gaming = () => {
  return (
    <div className='gaming'>
        <h2>Gaming</h2>
        <ul>
            <li>
            <Link to={'/category/playstation'} className='categories'>
                PlayStations
            </Link>
            </li>
            <li>
            <Link to={'/category/keyboard'} className='categories'>
                Keyboards
            </Link>
            </li>
            <li>
            <Link to={'/category/chairs'} className='categories'>
                Chairs
            </Link>
            </li>
            <li>
            <Link to={'/category/mouse'} className='categories'>
                Mouse
            </Link>
            </li>
            <li>
            <Link to={'/category/xbox'} className='categories'>
                Xbox
            </Link>
            </li>
      </ul>
    </div>
  )
}

export default Gaming
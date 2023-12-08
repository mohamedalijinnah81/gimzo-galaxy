import React from 'react'
import { Link } from 'react-router-dom'
import '../../../style/home/categories/Appliances.css'

const Others = () => {
  return (
    <div className='appliances'>
        <h2>Others</h2>
        <ul>
            <li>
            <Link to={'/gimzo-galaxy/category/flashdrives'} className='categories'>
                Flash Drives
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/usbotg'} className='categories'>
                OTG Connectors
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/sdcards'} className='categories'>
                SD Cards
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/electronicclocks'} className='categories'>
                Clocks
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/tvsticks'} className='categories'>
                TV Sticks
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/powerbanks'} className='categories'>
                Power Banks
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/mic'} className='categories'>
                Mic
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/drones'} className='categories'>
                Drones
            </Link>
            </li>
      </ul>
    </div>
  )
}

export default Others
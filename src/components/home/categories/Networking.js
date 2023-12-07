import React from 'react'
import '../../../style/home/categories/Appliances.css'
import { Link } from 'react-router-dom'

const Networking = () => {
  return (
    <div className='networking'>
        <h2>Networking</h2>
        <ul>
            <li>
            <Link to={'/category/routers'} className='categories'>
                Routers
            </Link>
            </li>
            <li>
            <Link to={'/category/modems'} className='categories'>
                Modems
            </Link>
            </li>
            <li>
            <Link to={'/category/networkingswitches'} className='categories'>
                Networking Switches
            </Link>
            </li>
            <li>
            <Link to={'/category/wifiadapters'} className='categories'>
                Wifi Adapters
            </Link>
            </li>
            <li>
            <Link to={'/category/networkcables'} className='categories'>
                Cables
            </Link>
            </li>
      </ul>
    </div>
  )
}

export default Networking
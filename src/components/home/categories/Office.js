import React from 'react'
import '../../../style/home/categories/Appliances.css'
import { Link } from 'react-router-dom'

const Office = () => {
  return (
    <div className='office'>
        <h2>Office Electronics</h2>
        <ul>
            <li>
            <Link to={'/gimzo-galaxy/category/printers'} className='categories'>
                Printers
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/scanners'} className='categories'>
                Scanners
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/projectors'} className='categories'>
                Projectors
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/shredders'} className='categories'>
                Shredders
            </Link>
            </li>
            <li>
            <Link to={'/gimzo-galaxy/category/calculators'} className='categories'>
                Calculators
            </Link>
            </li>
      </ul>
    </div>
  )
}

export default Office
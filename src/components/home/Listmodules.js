import React from 'react'
import Topdeals from './modules/Topdeals.js'
import '../../style/home/Listmodules.css'
import Smartphones from './modules/smartphone/Smartphones.js'
import Laptops from './modules/laptops/Laptops.js'

const Listmodules = () => {
  return (
    <div className='listmodules'>
        <Topdeals />
        <Smartphones />
        <Laptops />
    </div>
  )
}

export default Listmodules
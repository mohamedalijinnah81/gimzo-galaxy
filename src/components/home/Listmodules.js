import React from 'react'
import Topdeals from './modules/Topdeals.js'
import '../../style/home/Listmodules.css'
import Smartphones from './modules/smartphone/Smartphones.js'
import Laptops from './modules/laptops/Laptops.js'
import Smartwatches from './modules/smartwatches/Smartwatches.js'
import Earphones from './modules/earphones/Earphones.js'
import Cameras from './modules/cameras/Cameras.js'

const Listmodules = () => {
  return (
    <div className='listmodules'>
        <Topdeals />
        <Smartphones />
        <Laptops />
        <Cameras />
        <Smartwatches />
        <Earphones />
    </div>
  )
}

export default Listmodules
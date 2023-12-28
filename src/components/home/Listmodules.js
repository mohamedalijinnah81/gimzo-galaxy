import React from 'react'
import Topdeals from './modules/Topdeals.js'
import '../../style/home/Listmodules.css'
import Smartphones from './modules/smartphone/Smartphones.js'
import Laptops from './modules/laptops/Laptops.js'
import Smartwatches from './modules/smartwatches/Smartwatches.js'
import Earphones from './modules/earphones/Earphones.js'
import Cameras from './modules/cameras/Cameras.js'

const Listmodules = () => {
  const API_KEY = '9070025fc68f92ecfc70ce1e99519764';
  return (
    <div className='listmodules'>
        <Topdeals 
          API_KEY = {API_KEY}
        />
        <Smartphones 
            API_KEY = {API_KEY}
        />
        <Laptops 
          API_KEY = {API_KEY}
        />
        <Cameras 
          API_KEY = {API_KEY}
        />
        <Smartwatches 
          API_KEY = {API_KEY}
        />
        <Earphones 
          API_KEY = {API_KEY}
        />
    </div>
  )
}

export default Listmodules
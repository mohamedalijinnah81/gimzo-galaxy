import React from 'react'
import Topdeals from './modules/Topdeals.js'
import '../../style/home/Listmodules.css'
import Smartphones from './modules/smartphone/Smartphones.js'

const Listmodules = () => {
  return (
    <div className='listmodules'>
        <Topdeals />
        <Smartphones />
    </div>
  )
}

export default Listmodules
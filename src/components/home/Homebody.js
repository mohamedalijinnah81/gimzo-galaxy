import React from 'react'
import Sidebar from './Sidebar'
import Listmodules from './Listmodules'
import '../../style/home/Homebody.css'

const Homebody = () => {
  return (
    <div className='homebody'>
        <Sidebar />
        <Listmodules />
    </div>
  )
}

export default Homebody
import React from 'react'
import Sidebar from './Sidebar'
import Listmodules from './Listmodules'
import '../../style/home/Homebody.css'
import { Route, Routes } from 'react-router-dom'

const Homebody = () => {
  return (
    <div className='homebody'>
        <Sidebar />
        <Routes>
          <Route path='/gimzo-galaxy' element={<Listmodules />} />
        </Routes>
    </div>
  )
}

export default Homebody
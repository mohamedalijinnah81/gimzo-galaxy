import React from 'react'
import Recommendsection from './Recommendsection'
import '../../style/home/Sidebar.css'
import Categories from './Categories'
import Appliances from './Appliances'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Recommendsection />
        <Categories />
        <Appliances />
    </div>
  )
}

export default Sidebar
import React from 'react'
import Recommendsection from './categories/Recommendsection'
import '../../style/home/Sidebar.css'
import Categories from './categories/Categories'
import Appliances from './categories/Appliances'

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
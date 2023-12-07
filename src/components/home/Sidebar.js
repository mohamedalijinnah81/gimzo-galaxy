import React from 'react'
import Recommendsection from './categories/Recommendsection'
import '../../style/home/Sidebar.css'
import Categories from './categories/Categories'
import Appliances from './categories/Appliances'
import Office from './categories/Office'
import Gaming from './categories/Gaming'
import Networking from './categories/Networking'
import Desktopcomponents from './categories/Desktopcomponents'
import Others from './categories/Others'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Recommendsection />
        <Categories />
        <Appliances />
        <Office />
        <Gaming />
        <Networking />
        <Desktopcomponents />
        <Others />
    </div>
  )
}

export default Sidebar
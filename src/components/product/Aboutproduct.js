import React from 'react'
import '../../style/product/Aboutproduct.css'

const Aboutproduct = ({ aboutProduct }) => {
  return (
    <div className='aboutproduct'>
        <h2>About this item</h2>
        <ul>
          {Object.entries(aboutProduct).map(([key, value]) => (key !== 'Customer Reviews' &&
            <li key={key}><strong>{key + ':  '}</strong>{value}</li>
          ))}
        </ul>
    </div>
  )
}

export default Aboutproduct
import React from 'react'
import '../../style/product/Productfeatures.css'

const Productfeatures = ({ productFeatures }) => {
    // console.log(productFeatures);
  return (
    <div className='productfeatures'>
        <h2>Features</h2>
        <ul>
            {productFeatures.map((item, index) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Productfeatures
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import '../../style/product/Productskeleton.css'

const Productskeleton = () => {
  return (
        <SkeletonTheme baseColor='#F0F0F0' highlightColor='lightgrey'>
            <div className="productinfoskeleton">
                <Skeleton square width='20vw' height='20vw' className='productspecimg' />
                <div className="productspecskeleton">
                    <Skeleton count={3} className='productspectitle' />
                    <Skeleton count={1} className='productspecrating' />
                    <Skeleton count={1} className='productspecprice' />
                    <Skeleton square width='20vw' height='3vw' className='productcartbtn' />
                </div>
            </div>
            <div className="productfeatureskeleton">
                <Skeleton count={1} className='productfeaturetitle' />
                <Skeleton count={12} className='productfeaturelist' />
            </div>
            <div className="aboutproductskeleton">
                <Skeleton count={1} className='aboutproducttitle' />
                <Skeleton count={10} className='aboutproductlist' />
            </div>
        </SkeletonTheme>
  )
}

export default Productskeleton
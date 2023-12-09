import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import '../../style/searchresult/Searchskeleton.css'

const Searchskeleton = () => {
  return (
    <div className='searchskeleton'>
        <SkeletonTheme baseColor='#F0F0F0' highlightColor='lightgrey'>
            <div className="searchskeletonlist">
                <Skeleton square width='11vw' height='11vw' className='searchimg' />
                <div className="specskeleton">
                    <Skeleton count={2} className='searchtitle' />
                    <Skeleton count={1} className='searchrating' />
                    <Skeleton count={1} className='searchprice' />
                </div>
            </div>
            <div className="searchskeletonlist">
                <Skeleton square width='11vw' height='11vw' className='searchimg' />
                <div className="specskeleton">
                    <Skeleton count={2} className='searchtitle' />
                    <Skeleton count={1} className='searchrating' />
                    <Skeleton count={1} className='searchprice' />
                </div>
            </div>
            <div className="searchskeletonlist">
                <Skeleton square width='11vw' height='11vw' className='searchimg' />
                <div className="specskeleton">
                    <Skeleton count={2} className='searchtitle' />
                    <Skeleton count={1} className='searchrating' />
                    <Skeleton count={1} className='searchprice' />
                </div>
            </div>
            <div className="searchskeletonlist">
                <Skeleton square width='11vw' height='11vw' className='searchimg' />
                <div className="specskeleton">
                    <Skeleton count={2} className='searchtitle' />
                    <Skeleton count={1} className='searchrating' />
                    <Skeleton count={1} className='searchprice' />
                </div>
            </div>
            <div className="searchskeletonlist">
                <Skeleton square width='11vw' height='11vw' className='searchimg' />
                <div className="specskeleton">
                    <Skeleton count={2} className='searchtitle' />
                    <Skeleton count={1} className='searchrating' />
                    <Skeleton count={1} className='searchprice' />
                </div>
            </div>
            <div className="searchskeletonlist">
                <Skeleton square width='11vw' height='11vw' className='searchimg' />
                <div className="specskeleton">
                    <Skeleton count={2} className='searchtitle' />
                    <Skeleton count={1} className='searchrating' />
                    <Skeleton count={1} className='searchprice' />
                </div>
            </div>
        </SkeletonTheme>
    </div>
  )
}

export default Searchskeleton
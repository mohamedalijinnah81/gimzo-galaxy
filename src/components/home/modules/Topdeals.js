import React, { useState } from 'react'
import Slide3 from '../../../assets/home/slide1.jpg'
import Slide5 from '../../../assets/home/slide2.jpg'
import Slide1 from '../../../assets/home/slide3.jpg'
import Slide4 from '../../../assets/home/slide4.jpg'
import Slide2 from '../../../assets/home/slide5.webp'
import '../../../style/home/Topdeals.css'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Topdeals = () => {
    const slides = [[Slide1, Slide2, Slide3, Slide4, Slide5], ['/category/smartwatches', '/category/earbuds', '/category/smartphones', '/category/television', '/category/laptops']]
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousSlide = () => {
        const newIndex = (currentIndex - 1 + slides[0].length) % slides[0].length;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides[0].length;
        setCurrentIndex(newIndex);
    }

  return (
    <div className='topdeals'>
        <h2>Top Deals</h2>
        <Link to={slides[1][currentIndex]}>
            <img src={slides[0][currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </Link>
        <button
            className='slide-btn prev'
            onClick={previousSlide}
        >
            <FaChevronLeft />
        </button>
        <button
            className='slide-btn next'
            onClick={nextSlide}
        >
            <FaChevronRight />
        </button>
    </div>
  )
}

export default Topdeals
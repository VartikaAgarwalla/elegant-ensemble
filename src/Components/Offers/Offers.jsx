import React from 'react'
import exclusive_images from '../Assets/exclusive_image.png'
import './Offers.css'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h2>Offers for you</h2>
            <p>ONLY ON BESTSELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclusive_images} alt='exclusive_images' />
    </div>
    </div>
  )
}

export default Offers
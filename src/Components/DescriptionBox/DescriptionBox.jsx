import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descripbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An ecommerce website is your digital storefront on the internet. 
            It facilitates the transaction between a buyer and seller.
            It is the virtual space where you showcase products, and online customers make selections. 
            Your website acts as the product shelves, sales staff, and cash register of your online 
            business channel.</p>
            <p>Types of ecommerce include business-to-consumer (B2C), business-to-business (B2B), and consumer-to-consumer (C2C). Learning about the different types of ecommerce can help you determine the right model for your business.

            </p>
            
        </div>

    </div>
  )
}

export default DescriptionBox
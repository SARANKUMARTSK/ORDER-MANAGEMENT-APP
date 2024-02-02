import React from 'react'
import { Element } from 'react-scroll'
function About() {
  return <>
  <Element id='about' className='flex'>
  <img className='about_image' src="https://procurify.com/app/uploads/2018/03/ordermanagement.png" />
  <div className='about_heading'>
    <div className='flex'>
        <h1>Order Management System</h1>   
        <p>An order management system (OMS) is a digital tool used in ecommerce to track sales, orders, inventory, and fulfillment</p><br />
        <p>This is the brains behind the scenes in the ordering and fulfillment journey. It can make or break your relationship with your customers.</p>
         <img src="https://assets-global.website-files.com/60870ff4852ead1cbc70e142/60870ff4852ead566570ea49_feature_2.svg" alt="" />
    </div>
  </div>
  </Element>
  
  </>
}

export default About
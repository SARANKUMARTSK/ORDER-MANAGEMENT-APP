import React from 'react'
import { Element } from 'react-scroll'
function Services() {
  return <>
  <Element name="services" className='services_page'>
    <h3>The essential order processing activities include:</h3>
    <br />
        <div className='services_container'>
            <img className='float_image' src="https://www.shipbob.com/wp-content/uploads/2019/01/iStock-692898468-2-optimized.webp"  />
            <p><span>Receiving an order:</span> When a customer order is received, the order management system must register it and assign order numbers. In the case of online stores, the order is received when a customer hits the “submit order” button.</p>
            <p><span>Checking order and customer data:</span> An order management system in eCommerce must ensure that order and customer data are valid. The validation process might include order entry, item creation, payment, shipping, cancellation, returns processing, etc.</p>
            <p><span>Packing the items:</span> After order and customer data are checked, the OMS assigns order lines to items. That’s when order pickers would be able to see what items they need to pick and pack for a certain order.</p>
            <p><span>Shipping the order: </span>The final stage of order fulfillment is shipping the order to the customer. The order management system must provide pickers and shippers with all the necessary information, such as the tracking number, customer’s shipping address, etc.</p>
        </div>
    <h3>Inventory Management and Monitoring:</h3>
    <br />
        <div className='services_container'>
            <img className='float_image_right' src="https://20995814.fs1.hubspotusercontent-na1.net/hub/20995814/hubfs/Skubana/Blog%20Pages/Imported_Blog_Media/order%20management-1-Oct-12-2022-05-41-13-08-PM.png?upsize=true&upscale=true&width=1200&height=800&name=order%20management-1-Oct-12-2022-05-41-13-08-PM.png"  />
            <p style={{textIndent:"65px"}}>Inventory is one of retail and wholesale companies’ critical and most significant assets that require careful and accurate monitoring and control. So, properly managing inventory is essential for an eCommerce business to avoid the following issues:</p>
            <p><span>Overselling or understocking:</span> This issue refers to the acceptance of sales for out-of-stock items. Because you will not be able to fulfill these orders on time, it will lead to order cancellations, dissatisfied customers, and a ruined reputation.</p>
            <p><span>Overstocking:</span> When you have no clear image of your inventory volumes, you might end up over-ordering stock. Unnecessarily high stock levels create expenses, increase handling costs, waste warehouse space, and increase the risk of obsolescence.</p>
            <p><span>Imprecise forecasting:</span> Without precise inventory figures, it would be very challenging to assess customer demands accurately. Accurate inventory forecasting is one of the critical factors for a business’ success.</p>
        </div>
  </Element>
  
  </>
}

export default Services
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhone,faLocationDot,faBook,faTruck,faNoteSticky,faMobileRetro} from '@fortawesome/free-solid-svg-icons'

function AddSalesOrder() {
    let customerId="SO-12356"
  return <>
  <Link to='add-sales-order' style={{textDecoration:"none"}}>
    <div className='add-order' >

    
            <div className='add-order-header'>
               <h3>Add Sales Order</h3>
            </div>

        <div className='add-order-body'>
          <div className='order-form'>
            <label htmlFor="name"><FontAwesomeIcon className='order-page-icon' icon={faUser} />&nbsp;Customer Name :</label>&nbsp;<input type="text" placeholder='Full Name'/>
            <br />
            
            <label htmlFor="phone">Customer Contact Details :</label>
            <br />
            <FontAwesomeIcon className='order-page-icon' icon={faEnvelope} /> <input type="email" placeholder=' email id' />&nbsp;
            <FontAwesomeIcon className='order-page-icon' icon={faPhone} /> <input type="text" placeholder=' phone number' />&nbsp;
            <FontAwesomeIcon className='order-page-icon' icon={faMobileRetro} />&nbsp;<input type="text" placeholder=' Additional ph number' />
            <br />
      
            <label ><FontAwesomeIcon className='order-page-icon' icon={faLocationDot} />&nbsp;Delivery Address : </label><br />
            <input type="text" placeholder='Door No.'/>&nbsp;
            <input type="text"  placeholder='Street Name' />&nbsp;
            <input type="text"  placeholder='City Name'/> &nbsp;
            <input type="text"  placeholder='Pin Code'/>
            <br />
            

            <label><FontAwesomeIcon className='order-page-icon' icon={faBook} />&nbsp;Order Details: </label>
            <br />
            <input type="text" placeholder=' Product Name' />&nbsp;
            <input type="text" placeholder=' Qty' />&nbsp;
            <input type="text" placeholder=' Price' />&nbsp;
            <br />
            <br />
            <label htmlFor="">Order date :&nbsp;</label><input type="date" />&nbsp;
            <label htmlFor="">Delivery date :&nbsp;</label><input type="date" />
            <br />
            <label ><FontAwesomeIcon className='order-page-icon' icon={faNoteSticky} />&nbsp;Product Description:</label>
            <br />
            <textarea type="text" /><br />
            
            
            <label>Order Status : </label>&nbsp;
            <select className='selectTag'>
                <option  value="">New Order</option>
                <option  value="">Packed</option>
                <option  value="">Shipped</option>
                <option value="">Delivered</option>
            </select>&nbsp;&nbsp;&nbsp;
            <label><FontAwesomeIcon className='order-page-icon' icon={faTruck} />&nbsp;Selet Courier Service : </label>&nbsp;
            <select className='selectTag'>
                <option  value="">Express</option>
                <option  value="">Standard</option>
            </select>
            
            
          </div>
          
        </div>
        <div className='button_container'>
          <button>Submit</button>
        </div>
   </div>

  </Link>
  </>
}

export default AddSalesOrder
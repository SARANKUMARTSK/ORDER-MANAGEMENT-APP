import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBuilding ,faEnvelope,faPhone,faMobileRetro,faMapLocationDot,faBook,faNoteSticky,faCommentsDollar} from '@fortawesome/free-solid-svg-icons'

function AddPurchaseOrder() {
    let customerId="PO-12356"
  return <>
  <Link to='add-purchase-order' style={{textDecoration:"none"}}>
    <div className='add-order' >

    
            <div className='add-order-header'>
               <h3>Add Purchase Order</h3>
            </div>

        <div className='add-order-body'>
          <div className='order-form'>
            <label htmlFor="name"><FontAwesomeIcon className='order-page-icon' icon={faUser} />&nbsp;Seller Name :</label>&nbsp;<input type="text" placeholder='Full Name'/>&nbsp;
            <label htmlFor="name"><FontAwesomeIcon className='order-page-icon' icon={faBuilding} />&nbsp;Company Name :</label>&nbsp;<input type="text" placeholder='Company Name'/>
            <br />
            <label htmlFor="phone">Seller Contact Details :</label>
            <br />
            <FontAwesomeIcon className='order-page-icon' icon={faEnvelope} /> &nbsp;<input type="email" placeholder=' email id' />&nbsp;
            <FontAwesomeIcon className='order-page-icon' icon={faPhone} />&nbsp;<input type="text" placeholder=' phone number' />&nbsp;
            <FontAwesomeIcon className='order-page-icon' icon={faMobileRetro} />&nbsp;<input type="text" placeholder=' Additional ph number' />
            <br />
            <label ><FontAwesomeIcon className='order-page-icon' icon={faMapLocationDot} />&nbsp;Company Address : </label><br />
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
            <label htmlFor="">Expected Receiving date :&nbsp;</label><input type="date" />
            <br />
            <label ><FontAwesomeIcon className='order-page-icon' icon={faNoteSticky} />&nbsp;Product Description:</label>
            <br />
            <textarea type="text" /><br />
        
            <label><FontAwesomeIcon className='order-page-icon' icon={faCommentsDollar} />&nbsp;Payment : </label>&nbsp;
            <select className='selectTag'>
                <option  value="">Paid</option>
                <option  value="">Pending</option>
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

export default AddPurchaseOrder
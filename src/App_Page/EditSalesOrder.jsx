import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faPhone,faLocationDot,faBook,faTruck,faNoteSticky,faMobileRetro} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { API_URL } from '../App'

function EditSalesOrder() {
   let [name,setName] = useState("");
   let [email,setEmail] = useState("");
   let[phoneNumber,setPhoneNumber] = useState("");
   let[addPhoneNumber,setAddPhoneNumber] = useState("");
   let[doorNo,setDoorNo] = useState("");
   let[street , setStreet] = useState("");
   let[city,setCity]=useState("");
   let[pinCode , setPinCode] = useState("");
   let[productName,setProductName] = useState("");
   let[productQty,setProductQty] = useState("");
   let[productPrice,setProductPrice] = useState("");
   let[orderDate,setOrderdate]= useState("");
   let[deliveryDate , setDeliveryDate] = useState("");
   let[productDescription,setProductDescription] =useState("");
   let[status,setStatus] = useState("");
   let [courier,setCourier] = useState("");
   let {id} = useParams()
    
   useEffect(()=>{
   let fetchUserDetails = async()=>{
  try{
    let response = await axios.get(`${API_URL}/${id}`);
    let data = response.data;
    // console.log(response.data);
    setName(data.name),
    setEmail(data.email),
    setPhoneNumber(data.phoneNumber),
    setAddPhoneNumber(data.addPhoneNumber),
    setDoorNo(data.doorNo),
    setStreet(data.street),
    setCity(data.city),
    setPinCode(data.pinCode),
    setProductName(data.productName),
    setProductQty(data.productQty),
    setProductPrice(data.productPrice),
    setProductDescription(data.productDescription),
    setOrderdate(data.orderDate),
    setDeliveryDate(data.deliveryDate),
    setStatus(data.status),
    setCourier(data.courier)
  }catch(error){
    console.log(error);
  }
   }
   fetchUserDetails();
   },[id]);
   
  //  let handleUpdate=async()=>{
  //   try{
  //   let res = await axios.put(API_URL,name,email,phoneNumber,addPhoneNumber,doorNo,street,city,pinCode,
  //     productName,productQty,productPrice,orderDate,deliveryDate,productDescription,status,courier)
  //     navigate("/sales-order")
  //   }catch(error){
  //     console.log();
  //   }
  //  }
   
 
  return <>
  <Link to='add-sales-order' style={{textDecoration:"none"}}>
    <div className='add-order' >

    
            <div className='add-order-header'>
               <h3> Sales Order</h3>
            </div>

        <div className='add-order-body'>
          <div className='order-form'>
            <label htmlFor="name"><FontAwesomeIcon  className='order-page-icon' icon={faUser} />&nbsp;Customer Name :</label>&nbsp;<input value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder='Full Name'/>
            <br />
            
            <label htmlFor="phone">Customer Contact Details :</label>
            <br />
            <FontAwesomeIcon  className='order-page-icon' icon={faEnvelope} /> <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder=' email id' />&nbsp;
            <FontAwesomeIcon  className='order-page-icon' icon={faPhone} /> <input value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} type="text" placeholder=' phone number' />&nbsp;
            <FontAwesomeIcon  className='order-page-icon' icon={faMobileRetro} />&nbsp;<input value={addPhoneNumber} onChange={(e)=>{setAddPhoneNumber(e.target.value)}} type="text" placeholder=' Additional ph number' />
            <br />
      
            <label ><FontAwesomeIcon className='order-page-icon' icon={faLocationDot} />&nbsp;Delivery Address : </label><br />
            DoorNo:
            <input value={doorNo} onChange={(e)=>{setDoorNo(e.target.value)}} type="text" placeholder='Door No.'></input> &nbsp;
            Street:
            <input value={street} onChange={(e)=>{setStreet(e.target.value)}} type="text"  placeholder='Street Name' />&nbsp;
            City:
            <input value={city} onChange={(e)=>{setCity(e.target.value)}} type="text"  placeholder='City Name'/> &nbsp;<br />
            <br />
            PinCode:
            <input value={pinCode} onChange={(e)=>{setPinCode(e.target.value)}} type="text"  placeholder='Pin Code'/>
            <br />
            

            <label><FontAwesomeIcon className='order-page-icon' icon={faBook} />&nbsp;Order Details: </label>
            <br />
            Product:
            <input value={productName} onChange={(e)=>{setProductName(e.target.value)}} type="text" placeholder=' Product Name' />&nbsp;
            Qty : 
            <input value={productQty} onChange={(e)=>{setProductQty(e.target.value)}} type="text" placeholder=' Qty' />&nbsp;
            Price :
            <input value={productPrice} onChange={(e)=>{setProductPrice(e.target.value)}} type="text" placeholder=' Price' />&nbsp;
            <br />
            <br />
            <label htmlFor="">Order date :&nbsp;</label><input value={orderDate} onChange={(e)=>{setOrderdate(e.target.value)}} type="date" />&nbsp;
            <label htmlFor="">Delivery date :&nbsp;</label><input value={deliveryDate} onChange={(e)=>{setDeliveryDate(e.target.value)}} type="date" />
            <br />
            <label ><FontAwesomeIcon className='order-page-icon' icon={faNoteSticky} />&nbsp;Product Description:</label>
            <br />
            <textarea value={productDescription} onChange={(e)=>{setProductDescription(e.target.value)}} type="text" /><br />
            
            
            <label>Order Status : </label>&nbsp;
            <select className='selectTag' value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                <option  value="">New Order</option>
                <option  value="">Packed</option>
                <option  value="">Shipped</option>
                <option value="">Delivered</option>
            </select>&nbsp;&nbsp;&nbsp;
            <label><FontAwesomeIcon className='order-page-icon' icon={faTruck} />&nbsp;Selet Courier Service : </label>&nbsp;
            <select value={courier} onChange={(e)=>{setCourier(e.target.value)}} className='selectTag'>
                <option  value="">Express</option>
                <option  value="">Standard</option>
            </select>
            
            
          </div>
          
        </div>
        <div className='button_container'>
          <button onClick={()=>{handleUpdate(e)}}>Submit</button>
        </div>
   </div>

  </Link>
  </>
}

export default EditSalesOrder
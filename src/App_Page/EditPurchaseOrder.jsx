import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faBuilding ,faEnvelope,faPhone,faMobileRetro,faMapLocationDot,faBook,faNoteSticky,faCommentsDollar} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { API_URL2 } from '../App'


function EditPurchaseOrder() {
  
  let [name,setName] = useState("");
  let [company,setCompany] = useState("");
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
  let[productDescription,setProductDescription] = useState("");
  let[payment,setPayment]=useState("")
  let {id} =useParams()
    
  useEffect(()=>{
    let fetchUserDetails = async()=>{
   try{
     let response = await axios.get(`${API_URL2}/${id}`);
     let data = response.data;
     // console.log(response.data);
     setName(data.name),
     setCompany(data.company)
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
     setPayment(data.payment)
   }catch(error){
     console.log(error);
   }
    }
    fetchUserDetails();
    },[id]);


  // let handleUpdate=async()=>{
  //   try{
  //   let res = await axios.put(API_URL2,name,email,phoneNumber,addPhoneNumber,doorNo,street,city,pinCode,
  //     productName,productQty,productPrice,orderDate,deliveryDate,productDescription,status,courier)
  //     navigate("/sales-order")
  //   }catch(error){
  //     console.log();
  //   }
  //  }

  return <>
  <Link to='add-purchase-order' style={{textDecoration:"none"}}>
    <div className='add-order' >
            <div className='add-order-header'>
               <h3> Purchase Order</h3>
            </div>

        <div className='add-order-body'>
          <div className='order-form'>
            <label htmlFor="name"><FontAwesomeIcon className='order-page-icon' icon={faUser} />&nbsp;Seller Name :</label>&nbsp;<input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Full Name'/>&nbsp;
            <label htmlFor="name"><FontAwesomeIcon className='order-page-icon' icon={faBuilding} />&nbsp;Company Name :</label>&nbsp;<input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='Company Name'/>
            <br />
            <label htmlFor="phone">Seller Contact Details :</label>
            <br />
            <FontAwesomeIcon className='order-page-icon' icon={faEnvelope} /> &nbsp;<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder=' email id' />&nbsp;
            <FontAwesomeIcon className='order-page-icon' icon={faPhone} />&nbsp;<input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="text" placeholder=' phone number' />&nbsp;
            <FontAwesomeIcon className='order-page-icon' icon={faMobileRetro} />&nbsp;<input value={addPhoneNumber} onChange={(e)=>setAddPhoneNumber(e.target.value)} type="text" placeholder=' Additional ph number' />
            <br />
            <label ><FontAwesomeIcon className='order-page-icon' icon={faMapLocationDot} />&nbsp;Company Address : </label><br />
            <input value={doorNo} onChange={(e)=>setDoorNo(e.target.value)} type="text" placeholder='Door No.'/>&nbsp;
            <input value={street} onChange={(e)=>setStreet(e.target.value)} type="text"  placeholder='Street Name' />&nbsp;
            <input value={city} onChange={(e)=>setCity(e.target.value)} type="text"  placeholder='City Name'/> &nbsp;
            <input value={pinCode} onChange={(e)=>setPinCode(e.target.value)} type="text"  placeholder='Pin Code'/>
            <br />

            <label><FontAwesomeIcon className='order-page-icon' icon={faBook} />&nbsp;Order Details: </label>
            <br />
            <input value={productName} onChange={(e)=>setProductName(e.target.value)} type="text" placeholder=' Product Name' />&nbsp;
            <input value={productQty} onChange={(e)=>setProductQty(e.target.value)} type="text" placeholder=' Qty' />&nbsp;
            <input value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} type="text" placeholder=' Price' />&nbsp;
            <br />
            <br />
            <label htmlFor="">Order date :&nbsp;</label><input value={orderDate} onChange={(e)=>setOrderdate(e.target.value)} type="date" />&nbsp;
            <label htmlFor="">Expected Receiving date :&nbsp;</label><input value={deliveryDate} onChange={(e)=>setDeliveryDate(e.target.value)} type="date" />
            <br />
            <label ><FontAwesomeIcon className='order-page-icon' icon={faNoteSticky} />&nbsp;Product Description:</label>
            <br />
            <textarea value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} type="text" /><br />
        
            <label><FontAwesomeIcon className='order-page-icon' icon={faCommentsDollar} />&nbsp;Payment : </label>&nbsp;
            <select value={payment} onChange={(e)=>setPayment(e.target.value)} className='selectTag'>
                <option  value="">Paid</option>
                <option  value="">Pending</option>
            </select>
            
            
          </div>
          
        </div>
        <div className='button_container'>
          <button onClick={()=>handleUpdate(e)}>Submit</button>
        </div>
   </div>

  </Link>
  </>
}

export default EditPurchaseOrder
import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { API_URL2 } from '../App';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PurchaseOrder() {
  let navigate = useNavigate();
   let [Order , setOrder] = useState([])

   let getdata = async ()=>{
    try{
      let res = await axios.get(API_URL2)
      // console.log(res.data);
      setOrder(res.data)
    }catch(error){
      console.log(error);
    }
   }
   useEffect(()=>{
    getdata()
   },[])
   

   let handleDelete=async (purchaseOrder)=>{
    try{
      let res = await axios.delete(`${API_URL2}/${purchaseOrder.id}`);
      getdata();
   }catch(error){
    console.log(error);
   }
  }

  let handleView=()=>{
    navigate('add-purchase-order')
  }
  return <>
    <div className='order'>
        <div className='SO_PO-heading'>
        <h6>Purchase Orders</h6>
        <button><FontAwesomeIcon icon={faSquarePlus} />&nbsp;Create Order</button>
        </div>
    <div className='order-main-content'>
        <div className='bars'>
         <input className='selectTag' type="search" placeholder='Search' />&nbsp;&nbsp;&nbsp;
         <select className='selectTag' name="" id="">
                <option value="">Status</option>
                <option value="">NewOrder</option>
                <option value="">Packed</option>
                <option value="">Shipped</option>
                <option value="">Delivered</option>
                <option value="">Cancelled</option>
                <option value="">Return</option>
         </select>
        </div>
        
    <div className='container-fluid ' >
    <Table  striped  hover>
      <thead>
        <tr>
          <th>ORDER ID</th>
          <th>ORDER NUMBER</th>
          <th>STATUS</th>
          <th>ITEM</th>
          <th>CUSTOMER NAME</th>
          <th>SHIPPING SERVICE</th>
          <th>TRACKING CODE</th>
          <th>EDIT</th>
          <th>DELETE</th>
          <th>VIEW</th>
        </tr>
      </thead>
      {
        Order.map((e,i)=>{
     return <tbody key={i}>
        <tr>
          <td>{e.id}</td>
          <td>{e.orderId}</td>
          <td>
            <select className='selectTag'>
                <option value="">NewOrder</option>
                <option value="">Packed</option>
                <option value="">Shipped</option>
                <option value="">Delivered</option>
                <option value="">Cancelled</option>
                <option value="">Return</option>
            </select>
          </td>
          <td>{e.productQty}</td>
          <td>{e.name}</td>
          <td>{e.curier}</td>
          <td>{e.trackingCode}</td>
          <td><FontAwesomeIcon  icon={faPenToSquare} /></td>
          <td><FontAwesomeIcon onClick={()=>handleDelete(e)} icon={faTrashCan} /></td>
          <td><FontAwesomeIcon onClick={()=>handleView(e)} icon={faEye} /></td>
        </tr>
      </tbody>
        })
      }
      
    </Table>
   </div>
    </div>
        <div className='order-pagination-box container-fluid'>
            <h6>Showing 1 to 9 Of 9 Data </h6>
            <Pagination >
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
            </Pagination>
        </div>
    </div> 
    
  </>
}

export default PurchaseOrder
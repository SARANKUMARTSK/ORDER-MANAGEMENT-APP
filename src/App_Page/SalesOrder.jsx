import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan} from '@fortawesome/free-regular-svg-icons';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SalesOrder() {
    let navigate = useNavigate()
  return <>
  <div className='order'>
        <div className='SO_PO-heading'>
        <h6>Sales Orders</h6>
        <button onClick={()=>navigate('add-sales-order')}><FontAwesomeIcon icon={faSquarePlus} />&nbsp;Create Order</button>
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
      <tbody>
        <tr>
          <td>1</td>
          <td>SO-12365</td>
          <td>
            <select className='selectTag' name="" id="">
                <option value="">NewOrder</option>
                <option value="">Packed</option>
                <option value="">Shipped</option>
                <option value="">Delivered</option>
                <option value="">Cancelled</option>
                <option value="">Return</option>
            </select>
          </td>
          <td>1</td>
          <td>SARAN KUMAR</td>
          <td>Express</td>
          <td>SO-12365-EXP-26</td>
          <td ><FontAwesomeIcon icon={faPenToSquare} /></td>
          <td><FontAwesomeIcon icon={faTrashCan} /></td>
          <td><FontAwesomeIcon icon={faEye} /></td>
        </tr>
      </tbody>
    </Table>
   </div>
    </div>
        <div className='order-pagination-box container-fluid'>
            <h6>Showing 1 to 1 Of 1 Data </h6>
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

export default SalesOrder
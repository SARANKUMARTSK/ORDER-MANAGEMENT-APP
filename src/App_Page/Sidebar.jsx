import React from 'react'
import './Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoenixFramework, faNutritionix} from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faCartFlatbedSuitcase ,faPersonArrowDownToLine,faPersonArrowUpFromLine,faPowerOff} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function Sidebar() {
    const navigate = useNavigate();
  return <>
  <div className='sidebar' >
  <ul  className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"  id="accordionSidebar">
            {/*Sidebar - Brand*/}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon={faPhoenixFramework} />
                </div>
                <div className="sidebar-brand-text mx-3 dashboard_brand_name"><span>O</span>rder<span>H</span>ub</div>
            </a>
            {/* Divider*/}
            <hr className="sidebar-divider my-0"/>

            {/* Nav Item - Dashboard*/}
            <li className="nav-item active">
                <a className="nav-link" onClick={()=>navigate("initial")}>
                <FontAwesomeIcon icon={faNutritionix} />
                &nbsp;  <span>Dashboard</span></a>
            </li>

            {/* Divider*/}
            <hr className="sidebar-divider"/>

            {/* Heading*/}
            <div className="sidebar-heading">
                ORDERS
            </div>

            {/* Nav Item - Pages Collapse Menu*/}
            <li className="nav-item">
                <a className="nav-link" onClick={()=>navigate("purchase-order")}>
                <FontAwesomeIcon icon={faBagShopping}  />
                   &nbsp; <span>Purchase Orders</span>
                </a>
            </li>

            {/* Nav Item - Utilities Collapse Menu*/}
            <li className="nav-item">
                <a className="nav-link collapsed" onClick={()=>navigate("sales-order")}>
                <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
                &nbsp; <span>Sales Orders</span>
                </a>
            </li>

            {/* Divider*/}
            <hr className="sidebar-divider"/>

            {/* Heading*/}
            <div className="sidebar-heading">
                PEOPLE DATA
            </div>

            {/* Nav Item - Pages Collapse Menu*/}
            <li className="nav-item">
                <a className="nav-link collapsed" >
                <FontAwesomeIcon icon={faPersonArrowDownToLine} />
                &nbsp;&nbsp; <span>Supplier</span>
                </a>
            </li>
            {/* Nav Item - Charts*/}
            <li className="nav-item">
                <a className="nav-link" >
                <FontAwesomeIcon icon={faPersonArrowUpFromLine} />
                &nbsp; &nbsp;<span>Customer</span></a>
            </li>

             {/* Divider*/}
             <hr className="sidebar-divider"/>

            {/* Heading*/}
            <div className="sidebar-heading logout" onClick={()=>navigate("/home")}>
            <FontAwesomeIcon icon={faPowerOff} />&nbsp;
                LOG-OUT
                </div>
        </ul>
  </div>
  </>
}

export default Sidebar
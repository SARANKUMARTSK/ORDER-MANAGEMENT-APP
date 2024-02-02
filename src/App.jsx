import React from 'react'
import Home from './Home_Page/Home'
import Dashboard from './App_Page/Dashboard.jsx'
import { BrowserRouter,Routes ,Route , Navigate } from 'react-router-dom'
import Login from './Home_Page/Login.jsx'
import Initial from './App_Page/Initial.jsx'
import PurchaseOrder from './App_Page/PurchaseOrders.jsx'
import SalesOrder from './App_Page/SalesOrder.jsx'
import AddPurchaseOrder from './App_Page/AddPurchaseOrder.jsx'
import AddSalesOrder from './App_Page/AddSalesOrder.jsx'

function App() {
  return <> 
  <BrowserRouter>
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard />}>
     <Route path='add-sales-order' element={<AddSalesOrder/>}/>
     <Route path='add-purchase-order' element={<AddPurchaseOrder/>}/>
      <Route path='initial' element={<Initial/>}/>
      <Route path='purchase-order' element={<PurchaseOrder/>}></Route>
      <Route path='sales-order' element={<SalesOrder/>}></Route>
      <Route path='*' element={<Navigate to="initial"/>}></Route>
      <Route path='' element={<Navigate to="initial"/>}></Route>
    </Route>
    <Route path='*' element={<Navigate to="/home"/>} />
  </Routes>
  </BrowserRouter>
  
  </>
}

export default App
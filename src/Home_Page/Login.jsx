import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function Login() {
    let navigate = useNavigate();
    let [userName,setUserName] = useState();
    let [password , setPassword] = useState();
    let handleDashboard=(e)=>{
     if(userName=="saran"&&password=="123"){
      navigate('/dashboard')
     }
     else{
      alert("Please Enter Valid UserName & Password")
     }
    }
   
  return <>
  <div className='login_page'>
    <div className='login_container'>
        <div className='login_image'>
            {/* <img src="" alt="" /> */}
        </div>
        <div className='login_forms'>
        <FontAwesomeIcon className='login_icon' icon={faCircleUser} />
            <h3>USER LOGIN</h3>
            <input required value={userName} onChange={(e)=>{setUserName(e.target.value)}} type="text" placeholder='User Name'/>
            <input required value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='PassWord' />
            <button onClick={()=>handleDashboard()}>LOGIN</button>
        </div>
    </div>
  </div>
  </>
}

export default Login
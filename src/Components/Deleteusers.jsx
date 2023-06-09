import React from 'react'
import { clearalluser } from '../Store/Slice/Userslice';
import { useDispatch } from 'react-redux';
function Deleteusers() {
  const dispatch= useDispatch();
  const deleteallusers=()=>{
    dispatch(clearalluser())
  }
  return (
   <>
   <button  onClick={()=>deleteallusers()}>delete all users</button>
   
   </>
  )
}

export default Deleteusers
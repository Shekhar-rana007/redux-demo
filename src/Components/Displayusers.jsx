import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteuser } from '../Store/Slice/Userslice';

function Displayusers() {
    const dispatch= useDispatch();
    const data= useSelector((state)=>{
        return state.users;
    })

const deleteusers=(id)=>{
dispatch(deleteuser(id))
}

  return (
    <>

    {data.map((value,id)=>{
        return <li key={id}>{value}

        <button style={{marginLeft:"200px"}} onClick={()=>deleteusers(id)}  >x</button>

        <hr/></li>
    })}
    
    
    
    </>
  )
}

export default Displayusers
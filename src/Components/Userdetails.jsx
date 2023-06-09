import React from 'react'
import Deleteusers from './Deleteusers'
import { fakeuserdata } from '../api/ChanceApi'
import { useDispatch } from 'react-redux'
import { adduser } from "../Store/Slice/Userslice"
import Displayusers from './Displayusers'
// import store from '../Store/Index'

const Userdetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (name) => {
        dispatch(adduser(name))
    }

    const removeall=()=>{

    }

    return (
        <>
            <div className="content">
                <div className="admin-table">
                    <div className="subtitle">List of user details</div>
                    <button onClick={() => addNewUser(fakeuserdata())}> Add new users    </button>

                </div>
                <ul>
                    <Displayusers />
                </ul>
               <Deleteusers />
            </div>


        </>
    )
}

export default Userdetails
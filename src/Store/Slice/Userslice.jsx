import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({

    name:"user",
    initialState:[],
    reducers:{
        adduser(state,action){
            state.push(action.payload);
        },
        deleteuser(state,action){
            let userindexNum=action.payload
            console.log(state.indexOf(6))
            state.splice(userindexNum,1)
        },
        clearalluser(state,action){
                return [];
            console.log("deletedall")
        },
    },
    extraReducers(builder){
            builder.addCase (userSlice,clearalluser,()=>{
                return [];  
            })
    }
});
export default userSlice.reducer;
export const {adduser,deleteuser,clearalluser}= userSlice.actions;
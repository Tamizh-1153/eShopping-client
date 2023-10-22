import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "../cart/cartSlice";

const initialState = {
  user: null,
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        updateUser:(state,{payload})=>{
            state.user = payload
        },
        removeUser:(state)=>{
            state.user = null
        }
    }
})

export const {updateUser,removeUser}=userSlice.actions

export default userSlice.reducer
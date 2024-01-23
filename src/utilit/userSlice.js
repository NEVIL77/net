import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
    name: "user",
    initialState : null ,
    reducers : {
        addUser : (state,action) =>{ 
            return action.payload ;  /* when someone call this action then he add the things which store in actionpayload and we return this thing in store  */
        },
        removeUser : (state, action)=> {
            return null ; /* */
        } 
    }
})

export default userSlice.reducer ;

export const {addUser, removeUser} = userSlice.actions ; 
import { createSlice } from "@reduxjs/toolkit";
// import {products} from '../../data'
const initialState=[];
// console.log(products)
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})
export default cartSlice.reducer
export const {add,remove}=cartSlice.actions
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
 name:"cart",
 initialState:{ items:[] },
 reducers:{
   addToCart:(s, action)=>{ s.items.push(action.payload) },
   removeFromCart:(s, action)=>{ s.items = s.items.filter(i => i.id !== action.payload) },
   clearCart:(s)=>{ s.items=[] }
 }
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
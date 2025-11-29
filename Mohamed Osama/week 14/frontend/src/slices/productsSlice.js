import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async ()=>{
 const res = await fetch("http://localhost:5000/api/products");
 return res.json();
});

const productsSlice = createSlice({
 name:"products",
 initialState:{ products:[], loading:false },
 reducers:{},
 extraReducers:(builder)=>{
   builder
     .addCase(fetchProducts.pending, (s)=>{ s.loading=true })
     .addCase(fetchProducts.fulfilled, (s, action)=>{ s.products=action.payload; s.loading=false })
     .addCase(fetchProducts.rejected, (s)=>{ s.loading=false });
 }
});
export default productsSlice.reducer;
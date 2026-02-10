import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () =>{
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data.products);
        return data.products;
    }
)

const productSlice = createSlice({
    name : "products",
    initialState :{
        products : [],
        loading: false,
        error :null
    },
    reducers : {},
    extraReducers : (builder) =>{
        builder
        .addCase(fetchProducts.pending, (state) =>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) =>{
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

//export const {extraReducers} = productSlice.actions;
export default productSlice.reducer;
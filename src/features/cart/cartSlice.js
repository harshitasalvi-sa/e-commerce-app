//--------------REDUX TOOLKIT--------------
import { createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        totalQuantity : 0,
        totalPrice :0,
    },
    reducers : {
        addItem : (state, action) =>{
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            state.totalQuantity += 1;
            state.totalPrice += Number((newItem.price*10).toFixed());
            //console.log("existingItem.price : ", existingItem.price)
            
            if(!existingItem){
                state.items.push({
                    id : newItem.id,
                    title : newItem.title,
                    image : newItem.images,
                    // price : (newItem.price*10).toFixed(),
                    price : newItem.price,
                    quantity : 1
                })
            }
            else{
                existingItem.quantity +=1;
            }
        },
        removeItem : (state, action) => {
            const id = action.payload;

            const existingItem = state.items.find(
                (item) => item.id === id
            );

            if (!existingItem) return;

            state.totalQuantity -= 1;
            state.totalPrice -= Number((existingItem.price*10).toFixed());

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(
                    (item) => item.id !== id
                );
            } 
            else {
                existingItem.quantity -= 1;
            }
        },
        clearCart : (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
}) 

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
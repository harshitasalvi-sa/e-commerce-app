import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, clearCart, removeItem } from '../features/cart/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalQuantity, totalPrice} = useSelector(state=>state.cart);

  return (
    <div
    className='flex-1 bg-amber-100 mx-auto'>
        <h2>Cart</h2>

        <div className='flex flex-col gap-3'>
            {items && items.map((item) => (
            <div className='rounded-xl bg-gray-100 w-[70%] m-auto flex flex-col align-middle p-2'>
                <img src={item.image} alt={item.title} className='h-36'/>
                <div className='flex flex-col'>
                    <strong>{item.title}</strong>
                    <div className='flex flex-row w-20 justify-between align-middle m-auto'>
                        <button 
                        className='bg-gray-400 rounded-xl py-1 px-2'
                        onClick={()=>dispatch(addItem(item))}>+</button>
                    <p>{item.quantity}</p>
                    <button
                    className='bg-gray-400 rounded-xl py-1 px-2' 
                    onClick={()=>dispatch(removeItem(item.id))}>-</button>
                    </div>
                </div>
            </div>
        ))}
        </div>

        <div className='price'> 
            <p>Total Quantity : {totalQuantity}</p>
            <p>Total Price : {totalPrice}</p>
            <button 
            className='bg-red-500 rounded-xl p-2'
            onClick={()=>dispatch(clearCart())}>Empty Cart</button>
        </div>
    </div>
  )
}

export default Cart
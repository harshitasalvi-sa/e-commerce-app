import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice';

const ProductCard = ({item}) => {
    const dispatch = useDispatch();
  return (
    <div className='bg-gray-200 rounded-2xl m-2 p-4'>
        <img src={item.images} alt="" className='' />
        <div className="details">
            <strong>{item.title}</strong>
            <p>Rs. {(item.price*10).toFixed()}</p>
            <button 
            className='bg-amber-300 rounded-xl p-2'
            onClick={()=>dispatch(addItem(item))}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
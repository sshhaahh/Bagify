import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link} from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const[totalAmount,setTotalAmount]=useState(0);
  const cart=useSelector((state)=>state.cart); 
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
  },[cart])
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 text-center  my-8 '>
      <div>
      {
        cart.length>0?(<div>
          {
            cart.map((item,index)=>(
              <CartItem key={cart.id} index={index} item={item} />
            ))
          }
        </div>):(<div className='font-bold w-[100vw] text-xl text-center'><p>Cart Empty</p>
          
          <Link to='/'><button className='bg-green-700 text-white py-3 md:px-24 px-16 mt-6 rounded-xl  '>Shop Now</button></Link>
          </div>
        )
      }
      </div>
      { cart.length>0&&
      <div className='flex lg:mt-16 mt-4 flex-col '>
         <div className=' lg:mb-10 mb-3'>
          <p className='text-green-700 font-semibold md:text-xl text-md uppercase'>Your Cart</p>
         
         <p className='md:text-4xl text-2xl text-green-700 font-bold mb-2 md:mb-6'>SUMMARY</p>
         <p className='font-semibold md:text-xl text-md'>Total Items : <span>{
            cart.length>0?cart.length:0
          }</span></p>
         </div>
         <div className='font-semibold md:text-xl text-md'>
          <p>Total Amount : <span className='font-bold text-green-700'>${totalAmount}</span></p>
          <button className='bg-green-700 text-white py-3 md:px-24 px-14 md:mt-6 mt-2 rounded-xl '>Checkout now</button>
         </div>
      </div>
}
      
    </div>
  )
}

export default Cart
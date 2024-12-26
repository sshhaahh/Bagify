import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlices';
import toast from 'react-hot-toast';

const Card = (props) => {
    const product = props.product;
    let title = `${product.title.slice(0,14)}...`;
    let desc = `${product.description.slice(0,50)}...`;

    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
  return (
    <div className=' border-2 py-2  h-[25rem] w-[17rem] flex flex-col items-center  rounded-2xl hover:scale-110 hover:shadow-[0px_0px_100px_50px_rgba(0,_0,_0,_0.1)] group transition-all cursor-pointer shadow-lg duration-100 ease-in '>
        <div className='px-6 flex justify-center flex-col items-center'>
            <p  className='font-semibold text-xl'>{title}</p>
      
            <p className='text-xs text-black opacity-80 my-4'>{desc}</p>
        <div >
            <img className='h-52 w-44' src={product.image} alt='error'/>
        </div>
        </div>
        <div className='flex items-center justify-between px-3 w-full mt-8'>
            <p className='text-green-600 font-bold'>${product.price}</p>
            <div>            {
                cart.some((p)=>p.id===product.id)?
                (<button 
                    className='border-2 font-semibold text-sm py-2 border-black px-3 rounded-3xl group-hover:bg-slate-900 group-hover:text-white  transition-all duration-100 ease-in '
                    onClick={()=>{
                    dispatch(remove(product.id))
                    toast.success("Remove Successful")
                }}>REMOVE ITEM</button>):
                (<button
                    className='border-2 font-semibold text-sm py-2 border-black px-3 rounded-3xl group-hover:bg-slate-900 group-hover:text-white  transition-all duration-100 ease-in '
                    onClick={()=>{
                    dispatch(add(product))
                    toast.success("Add Successful")
                }}  >ADD TO CART</button>)
            }
        </div>
        </div>
       

        
    
    </div>

  )
}

export default Card
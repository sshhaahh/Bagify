import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector((state) => state.cart || []); 

  
  return (
    <div className=' md:text-2xl text-sm flex flex-row  max-w-10xl w-screen h-auto py-3 justify-evenly items-center text-white'>
      <div>
        <NavLink className='flex justify-center items-center gap-x-2' to='/'>
        <img src='/logo.png' alt='error' className='h-10 w-auto'></img>
        <span className="font-serif font-bold ">BAGIFY</span>
        </NavLink>
      </div>
        <div className='flex flex-row justify-between items-center gap-x-5 '>
          <NavLink to='/'><p className='font-semibold'>Home</p></NavLink>
          <div className='relative  flex justify-center items-center' >
            <NavLink className='text-2xl' to='/cart'><FaCartShopping />
              {
                cart.length>0 && (<span className='absolute top-[-10px] right-[-8px] bg-green-400 text-xs rounded-full w-5 h-5 text-white flex items-center justify-center animate-bounce '>{cart.length}</span>)
              }
            </NavLink>
           
          </div>
            
        </div>
    </div>
  )
}

export default Navbar
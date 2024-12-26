import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlices';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");
  const[title,setTitle]=useState(item.title);

  const adjustDescription = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDesc(`${item.description.slice(0, 20)}...`);
      setTitle(`${item.title.slice(0, 16)}...`);
    } else if (width < 1024) {
      setTitle(`${item.title.slice(0, 26)}...`);
      setDesc(`${item.description.slice(0, 60)}...`);
    } else {
      setTitle(`${item.title.slice(0, 36)}...`);
      setDesc(`${item.description.slice(0, 115)}...`);
    }
  };

  useEffect(() => {
    // पहली बार डिस्क्रिप्शन एडजस्ट करें
    adjustDescription();

    // रिसाइज़ इवेंट लिसनर जोड़ें
    window.addEventListener("resize", adjustDescription);

    // Cleanup listener
    return () => {
      window.removeEventListener("resize", adjustDescription);
    };
  }, [item.description]);

  return (
    <div className='mb-10 border-b-8 rounded-2xl lg:w-[40vw] h-[14rem] md:h-[16rem] md:w-[90vw] sm:w-[90vw] p-3 flex flex-row items-center justify-center gap-x-4'>
      <div>
        <img className='md:h-52 md:w-44 h-32 w-22'  alt='error' src={item.image} />
      </div>
      <div className='w-[30vw] px-4'>
        <p className='lg:text-xl md:text-lg text-[13px] font-semibold'>{title}</p>
        <p className='lg:text-sm sm:text-xs text-[10px]  lg:my-6 lg:px-2 p-1 my-2 text-black opacity-80'>{desc}</p>
        <div className='w-full flex flex-col md:flex-row justify-between items-center text-2xl '>
          <p className='text-green-500 text-sm md:text-lg font-bold'>${item.price}</p>
          <button
            onClick={() => dispatch(remove(item.id))}
            className='text-red-900 rounded-full p-2 text-sm md:text-xl md:mb-3 mt-4  bg-pink-300'
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

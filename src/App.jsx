import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
 
const App = () => {
  return (
    <div className='w-[100vw] flex  items-center flex-col mb-8 '>
      <div className='bg-slate-900 w-full flex justify-center items-center'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>

    </div>
  )}

export default App